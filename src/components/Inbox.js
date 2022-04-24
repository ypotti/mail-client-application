import React, { useContext } from "react";
import InboxHeader from "./InboxHeader";
import { ActionsContext } from "./Mail";
import ShortEmail from "./ShortEmail";
import ShortMobileMail from "./ShortMobileMail";

const Inbox = () => {
  const { actions } = useContext(ActionsContext);
  return (
    <div className="bg-white flex-grow-1">
      <InboxHeader />
      <table className="table table-hover d-none d-md-table">
        <tbody className="p-2">
          {actions.mailItemsArray.map((content, index) => (
            <ShortEmail key={index} details={content} />
          ))}
        </tbody>
      </table>
      <div className="d-md-none">
        {actions.mailItemsArray.map((content, index) => (
          <ShortMobileMail key={index} details={content} />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
