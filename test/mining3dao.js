const { expect } = require("chai");
const { localConfig, ethers } = hre = require("hardhat");
const { admin } = require("../lib/config.js");

describe("Mining3DAO", function () {
    const decimals = 18;
    const supply = ethers.BigNumber.from(10).pow(decimals + 8);

    var owner, deployer, test;
    var dao;

    beforeEach(async function() {
        // set up account
        owner = await admin(hre);
        const signers = await ethers.getNamedSigners();
        deployer = signers.deployer;
        test = signers.test;

        // deploy
        const DAO = await ethers.getContractFactory("Mining3DAO");
        dao = await upgrades.deployProxy(DAO, [owner.address]);
    });

    it("MiningDAO Metadata", async function() {
        expect(await dao.name()).to.equal('Mining3DAO');
        expect(await dao.symbol()).to.equal('MIN3');
        expect(await dao.decimals()).to.equal(18);
        expect(await dao.owner()).to.equal(owner.address);
        expect(await dao.totalSupply()).to.equal(supply);
        expect(await dao.balanceOf(owner.address)).to.equal(supply);
    });

    it("Mining3DAO Upgrade", async function() {
        const Mining3DAOV2 = await ethers.getContractFactory("Mining3DAOUpgradeTest");
        const upgraded = await upgrades.upgradeProxy(
            dao.address,
            Mining3DAOV2,
            {deployer: owner.signer}
        );

        expect(dao.address).to.equal(upgraded.address);
        await upgraded.connect(owner.signer).burn(supply);
        expect(await dao.totalSupply()).to.equal(0);
        expect(await dao.balanceOf(owner.address)).to.equal(0);
    });
});
