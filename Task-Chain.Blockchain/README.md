# Sample Hardhat Project


## Prerequisites

- [Hardhat 2.22.17](https://hardhat.org/)

## Installation

1. Install dependencies.


    ```shell
    npm install
    ```

## Configuration

1. Create a `.env` file.

2. Add your Alchemy API key, private key, and Etherscan API key to it.

    ```shell
    ALCHEMY_API_KEY={API_KEY_FROM_ALCHEMY.COM}
    PRIVATE_KEY={PRIVATE_KEY_FROM_CUSTODIAN_WALLET}
    ETHERSCAN_API_KEY={API_KEY_FROM_ETHERSCAN.COM}
    ```

## Usage

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test

# macOS/Linux
REPORT_GAS=true

# Windows
$env:REPORT_GAS=true

npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Hello.ts
npx hardhat ignition deploy ./ignition/modules/Hello.ts --network sepolia
```

## Authors

- [Daniel Ribeirinha-Braga](https://github.com/DBragz)

