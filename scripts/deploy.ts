import {ethers} from "hardhat";

async function main(){
    const [owner] = await ethers.getSigners();
    var factory = await ethers.getContractFactory("Counter");
    var Counter = await factory.deploy(owner.address);

    console.log("Address: ", await Counter.getAddress());
    console.log("Owner: ", owner.address);
}

main();
