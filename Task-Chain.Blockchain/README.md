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

## Compile

1. Compile the contracts.

    ```shell
    npx hardhat compile
    ```

## Tests

1. Run the tests.

    ```shell
    npx hardhat test
    ```

## Deploy

1. Deploy the contracts.

    ```shell
    npx hardhat ignition deploy ./ignition/modules/Lock.ts
    npx hardhat ignition deploy ./ignition/modules/Lock.ts --network sepolia
    ```

## Run on Hardhat Network

1. Run the node.

    ```shell
    # macOS/Linux
    REPORT_GAS=true

    # Windows
    $env:REPORT_GAS=true

    npx hardhat node
    ```

## Authors

- [Daniel Ribeirinha-Braga](https://github.com/DBragz)
