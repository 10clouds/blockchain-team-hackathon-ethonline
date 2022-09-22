import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { NetworkUserConfig } from "hardhat/types";
import "@graphprotocol/hardhat-graph";
import '@primitivefi/hardhat-dodoc';

import * as dotenv from "dotenv";

dotenv.config();

function createNetworkConfig(networkType: string, networkId: number): NetworkUserConfig {
    const url: string = `https://${networkType}.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
    // const url: string = networkType;
    let networkConfig: NetworkUserConfig = {
        chainId: networkId,
        url,
        allowUnlimitedContractSize: true,
        gas: 10000000,
    };
    const pk: Array<string> = process.env.PRIVATE_KEY!!.split(", ") || [];
    if (pk.length != 0) {
        networkConfig.accounts = pk;
    }
    return networkConfig;
}

const config: HardhatUserConfig = {
    solidity: "0.8.10",
    defaultNetwork: "localhost",
    networks: {
        localhost: {
            url: "http://localhost:8545",
        },
        mumbai: createNetworkConfig("polygon-mumbai", 80001),
        "optimism-goerli": createNetworkConfig("opt-goerli", 420),
    },
    subgraph: {
        name: "spaceh3ad/nftpadlock",
        product: "hosted-service",
        indexEvents: true,
        allowSimpleName: true,
    },
    paths: {
        subgraph: "./subgraph",
    },
};

export default config;
