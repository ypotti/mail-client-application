import React, { useContext } from "react";
import InboxHeader from "./InboxHeader";
import { ActionsContext } from "./Mail";
import ShortEmail from "./ShortEmail";

const Inbox = () => {
  const { actions, setActions } = useContext(ActionsContext);
  return (
    <div className="bg-white flex-grow-1">
      <InboxHeader />
      <table className="table table-hover">
        <tbody className="p-2">
          {actions.mailItemsArray.map((content, index) => (
            <ShortEmail key={index} details={content} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inbox;
