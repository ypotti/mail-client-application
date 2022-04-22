import React, { useContext } from "react";
import { ActionsContext } from "./Mail";

const Inbox = () => {
  const { actions, setActions } = useContext(ActionsContext);
  return (
    <div className="bg-white flex-grow-1">
      Inbox
      <p>{actions.page}</p>
    </div>
  );
};

export default Inbox;
