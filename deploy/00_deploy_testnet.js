const common = require('../lib/common.js');
const config = require('../lib/config.js');

module.exports = async (hre) => {
    const admin = await config.admin(hre);
    await common.confirmAndDeploy(
        hre,
        'TestEarningToken',
        ["Mining3 Earning Token", "MEARN"]
    );
};

module.exports.tags = ['Local', 'Testnet'];
