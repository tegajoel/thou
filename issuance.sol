// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// Mint more '$fanc.dev'
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FancToken is ERC20, Ownable {
    uint256 public artistPortfolioValue; // Store the value of the artist's portfolio in Wei
    uint256 public constant PERCENTAGE_OF_PORTFOLIO = 25;

    constructor(uint256 initialSupply, uint256 initialPortfolioValue) ERC20("FancToken", "FANC") {
        _mint(msg.sender, initialSupply);
        artistPortfolioValue = initialPortfolioValue;
    }

    function setArtistPortfolioValue(uint256 newValue) public onlyOwner {
        artistPortfolioValue = newValue;
    }

    function calculateFancValue() public view returns (uint256) {
        return (artistPortfolioValue * PERCENTAGE_OF_PORTFOLIO) / 100;
    }

    function mintFancTokens(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
