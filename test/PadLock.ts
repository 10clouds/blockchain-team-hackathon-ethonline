import { expect } from "chai";
import { ethers } from "hardhat";
import { parseEther } from "ethers/lib/utils";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { BigNumber } from "ethers";

import {
    PadLock__factory,
    PadLock,
    WETHMock,
    WETHMock__factory,
    PoolProviderMock,
    PoolProviderMock__factory,
    PoolStub__factory,
    PoolStub,
    VaultFactory__factory,
} from "../typechain-types";

describe("Padlock", function () {
    let deployer: SignerWithAddress;
    let bob: SignerWithAddress;
    let alice: SignerWithAddress;
    let executor: SignerWithAddress;
    let weth: WETHMock;
    let poolProvider: PoolProviderMock;
    let poolMock: PoolStub;
    let padlock: PadLock;
    let minimalFee = parseEther("0.001");

    beforeEach(async () => {
        [deployer, bob, alice, executor] = await ethers.getSigners();

        weth = await new WETHMock__factory(deployer).deploy();
        poolProvider = await new PoolProviderMock__factory(deployer).deploy();
        poolMock = await new PoolStub__factory(deployer).deploy();
        await poolProvider.setPoolAddress(poolMock.address);

        padlock = await new PadLock__factory(deployer).deploy(
            executor.address,
            weth.address,
            minimalFee,
            poolProvider.address,
        );

        await weth.transfer(alice.address, ethers.utils.parseEther("1"));
        await weth.transfer(bob.address, ethers.utils.parseEther("1"));

        await weth.connect(alice).approve(padlock.address, ethers.utils.parseEther("1"));
        await weth.connect(bob).approve(padlock.address, ethers.utils.parseEther("1"));
    });

    it("Should allow to proposeRelationship", async () => {
        expect(await proposeRelationship("1"))
            .to.emit(padlock, "RelationshipSubmitted")
            .withArgs(0, bob.address, alice.address);
    });

    it("Should allow to approveRelationship", async () => {
        const relationshipId = await proposeRelationship("1");

        expect(await padlock.connect(alice).approveRelationship(relationshipId))
            .to.emit(padlock, "RelationshipApproved")
            .withArgs(relationshipId, bob.address, alice.address);

        let newVault = (await padlock.relationships(BigNumber.from(relationshipId))).vault;

        let vaultFactory = new VaultFactory__factory(deployer).attach(await padlock.vaultFactory());
        let vaultOrigin = await vaultFactory.vaultOriginAddress();

        expect(newVault != vaultOrigin);
        expect(await weth.balanceOf(newVault)).to.be.eq(ethers.utils.parseEther("2"));
    });

    async function proposeRelationship(fee: string) {
        const tx = await padlock.connect(bob).proposeRelationship(alice.address, parseEther(fee));
        const waitedTx = await tx.wait();

        const event = waitedTx?.events?.find(event => event.event === "RelationshipProposed");

        return event?.args?.relationshipId.toNumber();
    }
});
