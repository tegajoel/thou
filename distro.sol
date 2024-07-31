// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FancTokenWithEarnings is ERC20, Ownable {
    uint256 public totalEarnings;
    mapping(address => uint256) public earningsBalance;

    constructor(uint256 initialSupply) ERC20("FancToken", "FANC") {
        _mint(msg.sender, initialSupply);
    }

    function distributeEarnings(uint256 amount) public onlyOwner {
        require(amount <= address(this).balance, "Insufficient balance in contract");
        uint256 totalSupply = totalSupply();
        for (uint256 i = 0; i < totalSupply; i++) {
            address holder = _addressOfHolderAtIndex(i);
            uint256 holderBalance = balanceOf(holder);
            uint256 holderEarnings = (amount * holderBalance) / totalSupply;
            earningsBalance[holder] += holderEarnings;
        }
    }

    function claimEarnings() public {
        uint256 earnings = earningsBalance[msg.sender];
        require(earnings > 0, "No earnings to claim");
        earningsBalance[msg.sender] = 0;
        payable(msg.sender).transfer(earnings);
    }

    function _addressOfHolderAtIndex(uint256 index) internal view returns (address) {
        // Implement a method to get address at index; depends on storage structure.
        // This is a placeholder and needs actual implementation.
        return address(0);
    }

    // To receive Ether
    receive() external payable {
        totalEarnings += msg.value;
    }
}
