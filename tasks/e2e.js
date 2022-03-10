const BigNumber = require("bignumber.js");
const config = require("../lib/config.js");
const time = require("../lib/time.js");
const common = require('../lib/common.js');
const logger = require('../lib/logger.js');
const state = require("../lib/state.js");
const gnosis = require('../lib/gnosis.js');
const courier = require('../lib/courier.js');
const binance = require('../lib/binance.js');

const workflow = 'nft-finalize-e2e';

function genSafeRequest(request) {
    return [
        {
            key: 'SenderAddress',
            value: request.senderAddress,
        },
        {
            key: 'SafeAddress',
            value: request.safeAddress,
        },
        {
            key: 'Interact With',
            value: request.safeTransaction.data.to,
        },
        {
            key: 'Calldata',
            value: request.safeTransaction.data.data,
        }
    ];
}

function genKV(obj) {
    return Object.keys(obj).map(k => ({key: k, value: obj[k]}));
}

function genOperation(i, request, context) {
    const {tx, signer, contract, func, args} = request;
    return {
        index: i,
        senderAddress: signer.address,
        contractAddress: contract.address,
        func: func,
        args: args.map(([k, v]) => k + ': ' + v).join('\n'),
        calldata: tx.data.data,
        operation: genKV(context),
    };
}

function genOperations(requests) {
    var result = [];
    for (let i = 0; i < requests.length; i++) {
        const {request, context} = requests[i];
        result.push(genOperation(i + 1, request, context));
    }
    return result;
}

async function exec(hre, coin, admin, requests, options) {
    if (admin.type == 'GNOSIS') {
        const {safe, service} = hre.shared.gnosis;
        const safeTx = requests.length == 1
            ? requests[0].request.tx
            : await safe.createTransaction(
                requests.map(req => req.request.tx.data)
            );
        const {request: safeReq} = await gnosis.propose(
            safe, service, safeTx, options
        );
        await courier.notifyGnosis(
            hre,
            coin,
            workflow,
            genSafeRequest(safeReq),
            genOperations(requests)
        );
        return safeReq;
    } else {
        const txReceipts = [];
        // do this in order incase there is dependencies between txes
        for (const req of requests) {
            txReceipts.push(await common.execTx(
                hre, admin.signer, req.request.tx, options
            ));
        }
        return txReceipts;
    }
}

task('mining3-finalize-e2e', 'finalize token earnings')
    .addParam('coin', 'Coin of DeMineNFT')
    .addFlag('skipprompts', 'if to skip prompts')
    .addFlag('nosupplycheck', 'do not check supply with hashrate online')
    .setAction(async (args, { ethers, localConfig } = hre) => {
        try {
            const admin = await config.admin(hre);
            if (hre.network.name == 'bsc') {
                logger.info("Will withdraw balance from binance to admin")
                await binance.withdrawAll(hre, args.coin, admin.address, args.skipprompts);
            }
            if (admin.type == 'GNOSIS') {
                hre.shared.gnosis = await gnosis.getSafe(hre, admin);
            }

            const mining3Addr = state.loadMining3(hre, args.coin).target;
            const mining3 = await ethers.getContractAt('Mining3', mining3Addr);
            const earningToken = await ethers.getContractAt(
                'ERC20',
                await mining3.earningToken()
            );

            const allowance = await earningToken.allowance(
                admin.address,
                mining3.address
            );
            console.log('allowance: ' + allowance.toString());

            const finalizeRequest = await run(
                'mining3-finalize',
                {
                    coin: args.coin,
                    mining3: mining3Addr,
                    nosupplycheck: args.nosupplycheck,
                    dryrun: true,
                }
            );

            const approveRequest = await common.run(
                hre,
                admin,
                earningToken,
                'increaseAllowance',
                [
                    ["spender", mining3.address],
                    ["amount", finalizeRequest.context.amountToDeposit]
                ],
                {dryrun: true}
            );
            return await exec(
                hre,
                args.coin,
                admin,
                [approveRequest, finalizeRequest],
                {skipPrompts: args.skipprompts}
            );
        } catch(err) {
            console.log(err);
            return;
            await courier.notifyE2EFailure(
                hre,
                args.coin,
                workflow,
                err.toString()
            );
        }
    });
