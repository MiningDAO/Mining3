// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import './Mining3DAO.sol';

contract Mining3DAOUpgradeTest is Mining3DAO {
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
