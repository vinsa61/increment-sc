import { assert } from "chai";
import { ethers } from "hardhat";
import { Counter } from "../typechain-types";

describe("Increment Test", function(){
    let factory: any;
    let counter: Counter;

    before( async function(){
        factory = await ethers.getContractFactory("Counter");
        counter = await factory.deploy();
    });

    it("Deploy Success", async function(){
        console.log("Address: ", await counter.getAddress());
        assert.isOk(await counter.getAddress());
    });

    it("Call Increment Function", async function(){
        let x = 0;
        while(x < 3){
            const txn = await counter.increment();
            const receipt = await txn.wait();

            // console.log(receipt);
            assert.equal(receipt?.status, 1);
            x++;
        }
    })

    it("Call getCount Function", async function(){
        const count = await counter.getCount();
        assert.equal(count, 3n);
    })

})

