const { localConfig } = require("hardhat");
const BN = require("bignumber.js");
const logger = require("../lib/logger.js");
const state = require("../lib/state.js");

const axios = require('axios');

async function query(config, params) {
    params['apikey'] = config.key;
    const qs = new URLSearchParams(params);
    const instace = axios.create();
    const url = `${config.api}?${qs.toString()}`;
    logger.info(`Posting ${url}`);
    const response = await instace.request({
        url: url,
        method: 'POST'
    });
    assert(
        response.data.status == "1",
        'Respones error: ' + JSON.stringify(response.data)
    );
    return response.data.result;
}

async function getTransferLogs(hre, fromBlock, address) {
    return query(
        hre.localConfig.scan[hre.network.name],
        {
            module: 'logs',
            action: 'getLogs',
            fromBlock: fromBlock,
            toBlock: 'lastest',
            address: address,
            // Transfer(address,address,uint256)
            topic0: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
        }
    );
}

function checkpoint(log) {
    {
        blockNumber: log.blockNumber,
        txIndex: log.transactionIndex,
        logIndex: log.logIndex,
    }
}

async function monitor(coin) {
    const loaded = state.loadMining3(hre, args.coin);
    const fromBlock = loaded.txReceipt.blockNumber;
    const mining3 = await ethers.getContractAt('Mining3', loaded.target);
    logger.info(`Mining3 contract ${mining3Addr} loaded`);

    const earningToken = await ethers.getContractAt(
        'ERC20',
        await mining3.earningToken()
    );
    logger.info(`Earning token ${earningToken.address} loaded`);
}

async function main() {
    await monitor('btc');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
