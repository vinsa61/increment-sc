// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Counter {
    uint count;

    function increment() public {
        count++;
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
