import { Config, OptimismGoerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

export const useDappConfig: Config = {
  readOnlyUrls: {
    [OptimismGoerli.chainId]: getDefaultProvider(
      `https://opt-goerli.g.alchemy.com/v2/${
        process.env.ALCHEMY_API_KEY ?? "https://goerli.optimism.io"
      }`
    )
  }
};
