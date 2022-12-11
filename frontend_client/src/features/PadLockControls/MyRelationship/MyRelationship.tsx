import { useEffect, useState } from "react";

import { useCall, useEthers } from "@usedapp/core";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { Spinner } from "../../../atoms/Spinner/Spinner";
import { Relationship } from "../../../types/interfaces";
import { PadLock } from "../../../contracts/PadLock";
import Web3 from "web3";

const GetRelationshipApproved = gql`
  query GetRelationshipApproved($account: String!) {
    firstHalf: relationshipApproveds(where: { firstHalf: $account }) {
      id
      relationshipId
      firstHalf
      secondHalf
    }
    secondHalf: relationshipApproveds(where: { secondHalf: $account }) {
      id
      relationshipId
      firstHalf
      secondHalf
    }
  }
`;

interface Props {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export const MyRelationship = ({ setCurrentView }: Props) => {
  const { account } = useEthers();
  const navigate = useNavigate();
  const { data, loading } = useQuery(GetRelationshipApproved, {
    variables: { account }
  });
  const [approvedRelationship, setApprovedRelationship] = useState<
    Relationship[]
  >([]);

  console.log();

  const { value, error } =
    useCall({
      contract: PadLock,
      method: "getRewardsData",
      args: []
    }) ?? {};

  console.log(value);

  useEffect(() => {
    if (!data) return;
    const { firstHalf, secondHalf } = data;
    setApprovedRelationship([...firstHalf, ...secondHalf]);
  }, [data]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {!approvedRelationship.length ? (
        <div>
          Currently not in a relationship.{" "}
          <button
            className="underline hover:text-red-600 transition"
            onClick={() => navigate("/propose")}
          >
            Propose
          </button>{" "}
          a relationship or{" "}
          <button
            onClick={() => setCurrentView("pending")}
            className="underline hover:text-red-600 transition"
          >
            accept
          </button>{" "}
          a pending relationship.
        </div>
      ) : (
        <div>
          <div className="text-xl mb-5">My relationship</div>
          <ul>
            {approvedRelationship.map((el, i) => (
              <li key={el.id} className="flex items-center">
                <div className="text-red-600 mr-4">{i + 1}.</div>
                <div>
                  With:{" "}
                  {account?.toLowerCase() === el.firstHalf.toLowerCase()
                    ? el.secondHalf
                    : el.firstHalf}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
