const { admin } = require('../lib/utils.js');

module.exports = async ({ ethers, upgrades, localConfig } = hre) => {
    const owner = await admin(hre);
    const deployed = localConfig.deployment[hre.network.name];
    if (deployed) {
        console.log("Reusing contract at " + deployed);
        return;
    }

    const DAO = await ethers.getContractFactory("IronchainDAO");
    console.log("Deploying IronchainDAO...");

    const dao = await upgrades.deployProxy(
        DAO,
        [
            localConfig.name,
            localConfig.symbol,
            owner.address,
            ethers.BigNumber.from(10).pow(18).mul(10000000)
        ],
        {initializer: "initialize",}
    );
    await dao.deployed();
    console.log("IronchainDAO deployed to:", dao.address);
};

module.exports.tags = ['DAO'];
