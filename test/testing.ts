import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { Counter } from "../typechain-types";

describe("Increment Test", function(){
    let factory: any;
    let counter: Counter;
    let owner: any;
    let otherAccount: any;

    beforeEach( async function(){
        [owner, otherAccount] = await ethers.getSigners();
        factory = await ethers.getContractFactory("Counter");
        counter = await factory.deploy(owner.address);
    });

    it("Deploy Success", async function(){
        console.log("Address: ", await counter.getAddress());
        assert.isOk(await counter.getAddress());
    });

    it("Verify Owner Variable", async function(){
        assert.equal(await counter.owner(), owner.address);
    });

    it("Counter Initial Value is Zero", async function(){
        const count = await counter.getCount();
        assert.equal(count, 0n);
    });

    it("Call Increment Function Using Owner Account", async function(){
        const txn = await counter.connect(owner).increment();
        const receipt = await txn.wait();

        assert.equal(receipt?.status, 1);
        // console.log(receipt);
    });

    it("Call Increment Function Using Other Account should Fail", async function(){
        await expect(counter.connect(otherAccount).increment())
        .to.be.revertedWith('Not the owner');
    });

    it("Call getCount Function", async function(){
        await counter.increment();
        await counter.increment();
        await counter.increment();
        const count = await counter.getCount();
        assert.equal(count, 3n);
    });

    it("CountIncremented Event Emitted with Correct Arguments", async function(){
        await expect(counter.connect(owner).increment())
        .to.emit(counter, "CountIncremented")
        .withArgs(1, owner.address);
    });

})

