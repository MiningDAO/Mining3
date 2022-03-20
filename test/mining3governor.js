const { expect } = require("chai");
const { localConfig, ethers, upgrades } = hre = require("hardhat");
const config = require("../lib/config.js");

const TIMELOCK_ADMIN_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TIMELOCK_ADMIN_ROLE"));
const PROPOSER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PROPOSER_ROLE"));
const EXECUTOR_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes("EXECUTOR_ROLE"));

const governorConfig = {
    votingDelay: "37565",
    votingPeriod: "37565",
    proposalThreshold: "100000000000000000000000",
};

describe("Mining3Governor", function () {
    const decimals = 18;
    const supply = ethers.BigNumber.from(10).pow(decimals + 8);

    var admin;
    var dao, governor, timelock;

    beforeEach(async function() {
        admin = await config.admin(hre);
        const DAO = await ethers.getContractFactory("Mining3DAO");
        dao = await upgrades.deployProxy(DAO, [admin.address]);

        // deploy governor
        hre.localConfig.governor = {
            [hre.network.name]: governorConfig
        };
        hre.localConfig.dao = {
            [hre.network.name]: {token: dao.address}
        };
        await hre.deployments.fixture(['Governor']);
        governor = await config.getDeployment(hre, 'Mining3Governor');
        timelock = await ethers.getContractAt(
            'TimelockController',
            await governor.timelock()
        );
    });

    it("TimelockController", async function() {
        expect(
            await timelock.getRoleAdmin(PROPOSER_ROLE)
        ).to.equal(TIMELOCK_ADMIN_ROLE);
        expect(
            await timelock.getRoleAdmin(EXECUTOR_ROLE)
        ).to.equal(TIMELOCK_ADMIN_ROLE);

        expect(
            await timelock.hasRole(TIMELOCK_ADMIN_ROLE, admin.signer.address)
        ).to.be.false;
        expect(
            await timelock.hasRole(TIMELOCK_ADMIN_ROLE, timelock.address)
        ).to.be.true;

        expect(
            await timelock.hasRole(PROPOSER_ROLE, governor.address)
        ).to.be.true;
        expect(
            await timelock.hasRole(EXECUTOR_ROLE, governor.address)
        ).to.be.true;

        expect(await timelock.getMinDelay()).to.equal(86400);
    });

    it("Mining3Governor", async function() {
        expect(await governor.timelock()).to.equal(timelock.address);
        expect(await governor.votingDelay()).to.equal(governorConfig.votingDelay);
        expect(await governor.votingPeriod()).to.equal(governorConfig.votingPeriod);
        expect(await governor.proposalThreshold()).to.equal(governorConfig.proposalThreshold);
    });
});
