import { ethers } from "hardhat";

async function main() {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();

    await hello.deployed();

    console.log("HelloWorld deployed to:", hello.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

