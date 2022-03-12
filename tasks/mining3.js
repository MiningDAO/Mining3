const { types } = require("hardhat/config");
const BN = require("bignumber.js");
const logger = require("../lib/logger.js");
const common = require("../lib/common.js");
const state = require("../lib/state.js");
const time = require("../lib/time.js");
const antpool = require("../lib/antpool.js");
const binance = require("../lib/binance.js");
const config = require("../lib/config.js");
const lodash = require('lodash');

// 1 days ago so you can finalize yesterday
const DEFAULT_SNAPSHOT = time.startOfDay(new Date());

const formatTs = function(ts) {
    return `${ts}(${new Date(ts * 1000).toISOString()})`;
}

async function loadEarningToken(hre, coin) {
    const earningTokenConfig = localConfig.earningToken[hre.network.name] || {};
    const earningTokenAddr = earningTokenConfig[coin];
    if (earningTokenAddr) {
        return await ethers.getContractAt('ERC20', earningTokenAddr);
    }
    return await config.getDeployment(hre, 'TestEarningToken');
}

async function getFinalizing(mining3, args) {
    const finalized = new BN((await mining3.lastFinalizedAt()).toString());
    const finalizedAsDate = new Date(finalized * 1000).toISOString();
    logger.info(`Latest finalized is ${formatTs(finalized)}`);

    const finalizing = finalized.plus(86400).toNumber();
    const finalizingAsDate = new Date(finalizing * 1000).toISOString();
    logger.info(`Finalizing ${formatTs(finalizing)}`);

    const now = time.toEpoch(new Date());
    const nowAsDate = new Date(now * 1000).toISOString();
    if (finalizing > now) {
        throw 'No need to finalize'
    }

    return {
        finalizing,
        finalizingAsDate,
        finalized,
        finalizedAsDate,
        finalizingAt: now,
        finalizingAtAsDate: nowAsDate,
    };
}

async function genPoolStats(hre, args, context) {
    const { finalizing } = context;
    const poolStats = await antpool.stats(
        hre.localConfig.antpool, args.coin, finalizing
    );
    const hashPerToken = hre.localConfig.hashPerToken[args.coin];
    poolStats.hashrateDecimal = poolStats.hashrate.div(hashPerToken);
    logger.info('AntPool stats loaded: ' + JSON.stringify(poolStats, null, 2));

    if (poolStats.hashrateDecimal.lt(context.tokenizedHashrate)) {
        const errMsg = "Effective hashrate is lower than token released!"
        if (!args.nosupplycheck) {
            throw `Error: ${errMsg} Real Hashrate is ${poolStats.hashrateDecimal.toString()},`
                + `tokenized Hashrate is ${context.tokenizedHashrate.toString()}`;
        } else {
            logger.warn(errMsg);
        }
    }
    return poolStats;
}

async function genEarning(admin, earningToken, context) {
    const {tokenizedHashrate, totalEarnedDecimal, hashrateDecimal} = context;
    const earningPerTokenDecimal = totalEarnedDecimal.div(hashrateDecimal);
    const earningPerToken = earningPerTokenDecimal.times(context.earningTokenBase).integerValue();

    const amountToDeposit = earningPerToken.times(tokenizedHashrate);
    const amountToDepositDecimal = earningPerTokenDecimal.times(tokenizedHashrate);

    const adminBalance = await earningToken.balanceOf(admin.address);
    const adminBalanceDecimal = new BN(adminBalance.toString()).div(context.earningTokenBase);
    if (amountToDepositDecimal.gt(adminBalanceDecimal)) {
        throw `Error: Insufficient balance of admin to deposit` +
            `, required=${totalEarningAsDecimal}, balance=${adminBalanceDecimal}`
    }
    return {
        earningPerToken,
        earningPerTokenDecimal,
        amountToDeposit,
        amountToDepositDecimal,
        amountToReserveDecimal: totalEarnedDecimal.minus(amountToDepositDecimal),
    };
}

async function genAppendix(admin, mining3, earningToken) {
    var appendix = {
        [admin.signer.address]: 'DeMineAdmin(External Account)',
        [mining3.address]: 'Mining3 Contract',
    };
    if (earningToken) {
        const symbol = await earningToken.symbol();
        appendix = lodash.merge(appendix, {
            [earningToken.address]: `${symbol}(EarningToken)`,
        });
    }
    if (admin.type == 'GNOSIS') {
        return {
            [admin.address]: 'DeMineAdmin(Gnosis Safe)',
            ...appendix
        }
    } else {
        return appendix;
    }
}

task('mining3-finalize', 'finalize cycle for DeMineNFT contract')
    .addParam('coin', 'earning token symbol')
    .addOptionalParam('mining3', 'mining3 contract address')
    .addFlag('nosupplycheck', 'do not check supply with hashrate online')
    .addFlag('dryrun', 'do not run but just simulate the process')
    .setAction(async (args, { ethers } = hre) => {
        logger.info("=========== nft-admin-finalize start ===========");
        config.validateCoin(args.coin);

        const admin = await config.admin(hre);
        const mining3Addr = args.mining3 || state.loadMining3(hre, args.coin).target;
        const mining3 = await ethers.getContractAt('Mining3', mining3Addr);
        logger.info(`Mining3 contract ${mining3Addr} loaded`);

        const earningToken = await ethers.getContractAt(
            'ERC20',
            await mining3.earningToken()
        );
        logger.info(`Earning token ${earningToken.address} loaded`);

        var context = await getFinalizing(mining3, args);
        context.earningTokenBase = new BN(10).pow(await earningToken.decimals());
        const supply = await mining3.totalSupplyAt(context.finalizing);
        context.tokenizedHashrate = new BN(supply.toString()).div(context.earningTokenBase);
        logger.info(`Tokenized hashrate is ${context.tokenizedHashrate}`);

        lodash.merge(context, await genPoolStats(hre, args, context));
        lodash.merge(context, await genEarning(admin, earningToken, context));
        lodash.merge(context, await genAppendix(admin, mining3, earningToken));

        logger.info('Report: ' + JSON.stringify(context, null, 2));
        const {request, response} = await common.run(
            hre,
            admin,
            mining3,
            'finalize',
            [["earningPerToken", context.earningPerToken]],
            {dryrun: args.dryrun}
        );
        return {request, context, response,};
    });

task('mining3-clone', 'finalize cycle for DeMineNFT contract')
    .addParam('coin', 'earning token symbol')
    .addOptionalParam('snapshot', 'start snapshot id', DEFAULT_SNAPSHOT, types.int)
    .setAction(async (args, { ethers } = hre) => {
        config.validateCoin(args.coin);

        const mining3 = await config.getDeployment(hre, 'Mining3');
        const beacon = await config.getDeployment(hre, 'UpgradeableBeacon');
        const proxy = await config.getDeployment(hre, 'Mining3Proxy');

        const contracts = state.tryLoadContracts(hre, args.coin);
        if (contracts.mining3) {
            logger.info("Nothing changed.");
            return contracts.mining3.target;
        }

        const name = 'Mining3 token for ' + args.coin.toUpperCase();
        const symbol = 'm3' + args.coin.toUpperCase();
        const earningToken = await loadEarningToken(hre, args.coin);

        const iface = new ethers.utils.Interface([
            'function initialize(string, string, address, uint)'
        ]);
        const data = iface.encodeFunctionData(
            'initialize',
            [name, symbol, earningToken.address, args.snapshot]
        );
        const admin = await config.admin(hre);

        logger.info('Cloning Mining3: ' + JSON.stringify({
            source: proxy.address,
            beacon: beacon.address,
            implementation: await beacon.implementation(),
            startSnapshotId: formatTs(args.snapshot),
            owner: admin.address,
            metadata: {
                name,
                symbol,
                decimals: 18
            },
            earningToken: {
                address: earningToken.address,
                name: await earningToken.name(),
                symbol: await earningToken.symbol(),
                decimals: await earningToken.decimals()
            },
        }, null, 2));
        const populatedTx = await proxy.connect(
           admin.signer
        ).populateTransaction.clone(data, admin.address);
        const txReceipt = await common.execTx(
            hre,
            admin.signer,
            populatedTx
        );
        const events = common.getTransactionEvents(
            [proxy, mining3],
            txReceipt
        );
        const cloned = events['Clone'].args.cloned;

        logger.info('Writing contract info to state file');
        state.updateContract(
            hre, args.coin, {
                'mining3': {
                    source: proxy.address,
                    target: cloned,
                    beacon: beacon.address,
                    txReceipt
                }
            }
        );
        return cloned;
    });

task('mining3-inspect', 'finalize cycle for DeMineNFT contract')
    .addParam('coin', 'earning token symbol')
    .setAction(async (args, { ethers } = hre) => {
        config.validateCoin(args.coin);
        const mining3Deploy = await config.getDeployment(hre, 'Mining3');
        const beaconDeploy = await config.getDeployment(hre, 'UpgradeableBeacon');
        const proxyDeploy = await config.getDeployment(hre, 'Mining3Proxy');

        const contracts = state.tryLoadContracts(hre, args.coin);
        const mining3Proxy = await ethers.getContractAt(
            'Mining3Proxy', contracts.mining3.target
        );
        const beacon = await ethers.getContractAt(
            'UpgradeableBeacon',
            await mining3Proxy.beacon()
        );

        const mining3 = await ethers.getContractAt(
            'Mining3', contracts.mining3.target
        );
        const earningToken = await ethers.getContractAt(
            'ERC20',
            await mining3.earningToken()
        );
        const decimals = await earningToken.decimals();
        let balance = await earningToken.balanceOf(mining3.address);
        balance = new BN(balance.toString()).div('1e+' + decimals);

        logger.info(JSON.stringify({
            proxySource: contracts.mining3.source,
            mining3Proxy: mining3Proxy.address,
            beacon: beacon.address,
            implementation: await beacon.implementation(),
            metadata: {
                name: await mining3.name(),
                symbol: await mining3.symbol(),
                decimals: await mining3.decimals(),
            },
            earningToken: {
                name: await earningToken.name(),
                symbol: await earningToken.symbol(),
                decimals: decimals,
                balance: balance.toFixed(),
            },
            beaconDeploy: beaconDeploy.address,
            implementationDeploy: mining3Deploy.address,
            proxyDeploy: proxyDeploy.address
        }, null, 2));
    });
