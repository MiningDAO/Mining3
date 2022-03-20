const common = require('../lib/common.js');
const config = require('../lib/config.js');

module.exports = async ({ ethers, localConfig } = hre) => {
    const admin = await config.admin(hre);
    await common.confirmAndDeploy(
        hre,
        'TimelockController',
        [3600 * 24, [admin.address], [admin.address]] // delay by one day
    );
    const timelock = await config.getDeployment(hre, 'TimelockController');
    const role = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TIMELOCK_ADMIN_ROLE"));
    if (await timelock.connect(admin.signer).hasRole(role, admin.signer.address)) {
        console.log('Rebouncing role for ' + admin.signer.address);
        await timelock.connect(
            admin.signer
        ).renounceRole(role, admin.signer.address);
    }

    const dao = localConfig.dao[hre.network.name];
    if (dao.governor) {
        console.log("Reusing contract at " + dao.governor);
        return;
    }

    if (dao && dao.token) {
        await common.confirmAndDeploy(
            hre,
            'Mining3Governor',
            [dao.token, timelock.address]
        );
    }
}

module.exports.tags = ['DAO', 'Governor'];
