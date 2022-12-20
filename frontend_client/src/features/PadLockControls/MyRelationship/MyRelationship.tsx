import { useEffect, useState } from "react";

import { useCall, useEthers, useContractFunction } from "@usedapp/core";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { Spinner } from "../../../atoms/Spinner/Spinner";
import { Relationship, BreakupProposal } from "../../../types/interfaces";
import {
  unixToDate,
  daysSinceRelationshipStarted
} from "../../../utils/dateUtils";
import { ERC721 } from "../../../contracts/ERC721";
import { Button } from "../../../atoms/Button/Button";
import { PadLock } from "../../../contracts/PadLock";
import { toast } from "react-toastify";

const GetRelationshipApproved = gql`
  query GetRelationshipApproved($account: String!) {
    firstHalf: relationshipApproveds(where: { firstHalf: $account }) {
      id
      relationshipId
      firstHalf
      secondHalf
      startedAt
      NFTPadlock
      NFTFraction
    }
    secondHalf: relationshipApproveds(where: { secondHalf: $account }) {
      id
      relationshipId
      firstHalf
      secondHalf
      startedAt
      NFTPadlock
      NFTFraction
    }
  }
`;

const GetBreakupProposal = gql`
  query GetBreakupProposal($relationshipId: String!) {
    breakupProposals(where: { relationshipId: $relationshipId }) {
      id
      relationshipId
      initiator
    }
  }
`;

interface Props {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

export const MyRelationship = ({ setCurrentView }: Props) => {
  const [approvedRelationship, setApprovedRelationship] =
    useState<Relationship | null>(null);
  const [breakupProposal, setBreakupProposal] =
    useState<BreakupProposal | null>(null);

  const { account } = useEthers();
  const navigate = useNavigate();

  const {
    data: relationshipApprovedData,
    loading: relationshipApprovedLoading
  } = useQuery(GetRelationshipApproved, {
    variables: { account }
  });

  const {
    data: relationshipProposedData,
    loading: relationshipProposedLoading
  } = useQuery(GetBreakupProposal, {
    variables: { relationshipId: approvedRelationship?.relationshipId }
  });

  const { value: erc721Uri } =
    useCall({
      contract: ERC721,
      method: "tokenURI",
      args: [approvedRelationship?.NFTPadlock]
    }) ?? {};

  const {
    state: proposeBreakupState,
    send: proposeBreakupSend,
    resetState: proposeBreakupResetState
  } = useContractFunction(PadLock, "proposeBreakUp", {
    transactionName: "Propose breakup"
  });

  const {
    state: approveBreakupState,
    send: approveBreakupSend,
    resetState: approveBreakupResetState
  } = useContractFunction(PadLock, "approveBreakup", {
    transactionName: "Approve breakup"
  });

  const proposeBreakup = () => proposeBreakupSend();

  const approveBreakup = () => approveBreakupSend();

  useEffect(() => {
    if (proposeBreakupState.errorMessage) {
      toast.error(proposeBreakupState.errorMessage);
      proposeBreakupResetState();
    }

    if (approveBreakupState.errorMessage) {
      toast.error(approveBreakupState.errorMessage);
      approveBreakupResetState();
    }

    if (proposeBreakupState.status === "Success") {
      toast.success("Breakup has been successfully proposed");
      proposeBreakupResetState();
    }

    if (approveBreakupState.status === "Success") {
      toast.success("Breakup has approved");
      proposeBreakupResetState();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    proposeBreakupState.status,
    proposeBreakupState.errorMessage,
    approveBreakupState.status,
    approveBreakupState.errorMessage
  ]);

  useEffect(() => {
    if (!relationshipApprovedData) return;
    const { firstHalf, secondHalf } = relationshipApprovedData;

    if (firstHalf.length || secondHalf.length) {
      setApprovedRelationship(firstHalf[0] || secondHalf[0]);
    }
  }, [relationshipApprovedData]);

  useEffect(() => {
    if (!relationshipProposedData) return;

    if (relationshipProposedData.length) {
      setBreakupProposal(relationshipProposedData[0]);
    }
  }, [relationshipProposedData]);

  if (relationshipApprovedLoading || relationshipProposedLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {!approvedRelationship ? (
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
          <div className="text-2xl mb-6">My relationship</div>
          {erc721Uri && (
            <div className="bg-teal-100 rounded-lg inline-block mb-4">
              <img src={erc721Uri[0]} className="max-w-xs" alt="Love Padlock" />
            </div>
          )}
          <div className="text-lg">
            <div className="mr-4 mb-4">
              <span className="mr-4 font-medium">Created:</span>
              <span className="mr-2">
                {unixToDate(approvedRelationship.startedAt).toLocaleString()}
              </span>
              <span>
                ({daysSinceRelationshipStarted(approvedRelationship.startedAt)})
              </span>
            </div>
            <div className="mb-6">
              <span className="mr-4 font-medium">With:</span>
              {account?.toLowerCase() ===
              approvedRelationship.firstHalf.toLowerCase()
                ? approvedRelationship.secondHalf
                : approvedRelationship.firstHalf}
            </div>
            <div>
              {breakupProposal ? (
                <Button
                  onClick={
                    breakupProposal.initiator === account
                      ? () => {}
                      : () => approveBreakup()
                  }
                  disabled={breakupProposal.initiator === account}
                  variant="tertiary"
                >
                  {breakupProposal.initiator === account
                    ? "Awaiting approval"
                    : "Approve breakup"}
                </Button>
              ) : (
                <Button onClick={() => proposeBreakup()} variant="tertiary">
                  Propose breakup
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
