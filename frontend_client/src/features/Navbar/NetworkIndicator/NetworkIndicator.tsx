import { useNetwork, useChainMeta } from "@usedapp/core";

export const NetworkIndicator = () => {
  const { network } = useNetwork();
  const meta = useChainMeta(network.chainId || 1);
  return (
    <div className="text-sm">
      Network: <div className="font-bold">{meta.chainName}</div>
    </div>
  );
};
