// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Counter {
    address public owner;
    uint count;

    event CountIncremented(uint newCount, address indexed owner);

    constructor(address _owner){
        owner = _owner;
    }

    function increment() public {
        require(msg.sender == owner, "Not the owner");
        count++;
        emit CountIncremented(count, msg.sender);
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
