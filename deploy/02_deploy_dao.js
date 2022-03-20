const { admin } = require('../lib/config.js');

module.exports = async ({ ethers, upgrades, localConfig } = hre) => {
    const owner = await admin(hre);
    const deployed = localConfig.dao[hre.network.name];
    if (deployed && deployed.token) {
        console.log("Reusing contract at " + deployed.token);
        return;
    }

    const DAO = await ethers.getContractFactory("Mining3DAO");
    console.log("Deploying Mining3DAO...");

    const dao = await upgrades.deployProxy(
        DAO,
        [owner.address],
        {initializer: "initialize",}
    );
    await dao.deployed();
    console.log("Mining3DAO deployed to:", dao.address);
};

module.exports.tags = ['DAO'];
