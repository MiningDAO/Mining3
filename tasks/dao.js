const { types } = require("hardhat/config");
const config = require("../lib/config.js");
const logger = require("../lib/logger.js");

task('mining3-dao-votes', 'inspect votes')
    .addParam('address', 'address to check')
    .addOptionalParam('blocknum', 'block number to check', undefined, types.int)
    .setAction(async (args, { ethers } = hre) => {
        const dao = await ethers.getContractAt(
            'ERC20Votes',
            localConfig.dao[hre.network.name].token
        );
        const balance = await dao.balanceOf(args.address);
        console.log('Balance: ' + balance.toString());
        if (args.blocknum) {
            const votes = await dao.getPastVotes(args.address, args.blocknum);
            console.log('Voting Power: ' + votes.toString());
        } else {
            const votes = await dao.getVotes(args.address);
            console.log('Voting Power: ' + votes.toString());
        }
    });

task('mining3-dao-governor', 'inspect governor contract')
    .setAction(async (args, { ethers } = hre) => {
        const admin = await config.admin(hre);
        const governor = await ethers.getContractAt(
            'Mining3Governor',
            localConfig.dao[hre.network.name].governor
        );
        const timelock = await ethers.getContractAt(
            'TimelockController',
            await governor.timelock()
        );

        const timelockDelay = await timelock.getMinDelay();
        const role = ethers.utils.keccak256(
            ethers.utils.toUtf8Bytes("TIMELOCK_ADMIN_ROLE")
        );
        const adminRole = await timelock.getRoleAdmin(role);

        const votingDelay = await governor.votingDelay();
        const votingPeriod = await governor.votingPeriod();
        const proposalThreshold = await governor.proposalThreshold();

        logger.info(JSON.stringify({
            votingDelay: votingDelay.toString(),
            votingPeriod: votingPeriod.toString(),
            timelockDelay: timelockDelay.toString(),
            proposalThreshold: proposalThreshold.toString(),
            adminRole: adminRole,
            timelockAdmin: {
                [admin.signer.address]: await timelock.hasRole(role, admin.signer.address),
                [admin.address]: await timelock.hasRole(role, admin.address),
                [timelock.address]: await timelock.hasRole(role, timelock.address),
            }
        }, null, 2));
    });
