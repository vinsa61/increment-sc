import {ethers} from "hardhat";

async function main(){
    var factory = await ethers.getContractFactory("Counter");
    var Counter = await factory.deploy();

    console.log("Address: ", await Counter.getAddress());
}

main();
