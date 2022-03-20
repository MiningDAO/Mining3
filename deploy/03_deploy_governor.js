const common = require('../lib/common.js');
const config = require('../lib/config.js');

const TIMELOCK_ADMIN_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TIMELOCK_ADMIN_ROLE"));
const PROPOSER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PROPOSER_ROLE"));
const EXECUTOR_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("EXECUTOR_ROLE"));

module.exports = async ({ ethers, localConfig, network} = hre) => {
    const admin = await config.admin(hre);
    await common.confirmAndDeploy(
        hre,
        'TimelockController',
        [3600 * 24, [], []] // delay by one day
    );
    const timelock = await config.getDeployment(hre, 'TimelockController');

    const governorConfig = localConfig.governor[network.name];
    console.log("GovernorConfig is " + JSON.stringify(governorConfig, null, 2));
    await common.confirmAndDeploy(
        hre,
        'Mining3Governor',
        [
            localConfig.dao[hre.network.name].token,
            governorConfig.votingDelay,
            governorConfig.votingPeriod,
            governorConfig.proposalThreshold,
            timelock.address
        ]
    );
    const governor = await config.getDeployment(hre, 'Mining3Governor');

    if (await timelock.connect(admin.signer).hasRole(
        TIMELOCK_ADMIN_ROLE, admin.signer.address
    )) {
        console.log('Granting role to governor ' + governor.address);
        await timelock.connect(admin.signer).grantRole(PROPOSER_ROLE, governor.address);
        await timelock.connect(admin.signer).grantRole(EXECUTOR_ROLE, governor.address);
        console.log('Rebouncing role for ' + admin.signer.address);
        await timelock.connect(
            admin.signer
        ).renounceRole(TIMELOCK_ADMIN_ROLE, admin.signer.address);
    }
}

module.exports.tags = ['DAO', 'Governor'];
