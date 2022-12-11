import { useEthers } from "@usedapp/core";

export const TopRelationships = () => {
  const { account } = useEthers();

  if (!account) {
    return <p>Please connect your account first</p>;
  }

  return <div>Top relationships</div>;
};
