// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// test interface
contract Mum {
    uint public x = 125;

    constructor() {
        // x 
    }

    function changeX(uint _x) external {
        x = _x;
    }
}