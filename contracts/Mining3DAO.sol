// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20VotesUpgradeable.sol";

contract Mining3DAO is
    UUPSUpgradeable,
    ERC20VotesUpgradeable,
    OwnableUpgradeable
{
    function initialize(address owner) external initializer {
        __Ownable_init();
        __ERC20_init("Mining3DAO", "MIN3");
        __ERC20Permit_init("Mining3DAO");
        __ERC20Votes_init();
        transferOwnership(owner);
        _mint(owner, 10**26);
    }

    // The functions below are overrides required by Solidity.
    function _afterTokenTransfer(address from, address to, uint256 amount)
        internal
        override(ERC20VotesUpgradeable)
    {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount)
        internal
        override(ERC20VotesUpgradeable)
    {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20VotesUpgradeable)
    {
        super._burn(account, amount);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}
