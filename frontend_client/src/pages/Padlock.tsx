import { useState } from "react";

import { useCall, useEthers } from "@usedapp/core";

import { PadLock } from "../contracts/PadLock";
import { MyRelationship } from "../features/PadLockControls/MyRelationship/MyRelationship";
import { MyPendingRelationships } from "../features/PadLockControls/MyPendingRelationships/MyPendingRelationships";
import { Button } from "../atoms/Button/Button";
import { Spinner } from "../atoms/Spinner/Spinner";

export const Padlock = () => {
  const [currentView, setCurrentView] = useState("active");

  const { account } = useEthers();

  const { value } =
    useCall({
      contract: PadLock,
      method: "loverToRelationshipId",
      args: [account]
    }) ?? {};

  if (!account) {
    return <p>Please connect your account first</p>;
  }

  if (!value) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="mb-8">
        <Button
          variant={
            currentView === "active" ? "secondaryFull" : "secondaryGhost"
          }
          className="mr-2"
          onClick={() => setCurrentView("active")}
        >
          Active
        </Button>
        <Button
          variant={
            currentView === "pending" ? "secondaryFull" : "secondaryGhost"
          }
          onClick={() => setCurrentView("pending")}
        >
          Pending
        </Button>
      </div>
      <div>
        {currentView === "active" ? (
          <MyRelationship setCurrentView={setCurrentView} />
        ) : (
          <MyPendingRelationships />
        )}
      </div>
    </div>
  );
};
