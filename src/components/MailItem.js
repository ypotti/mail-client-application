import React, { useContext } from "react";
import { ActionsContext } from "./Mail";

const MailItem = (props) => {
  const { actions, setActions } = useContext(ActionsContext);
  const { details } = props;
  return (
    <li
      className="d-flex flex-row align-items-center pointer"
      onClick={() => setActions({ ...actions, page: details.displayName })}
    >
      {details.icon}
      <span>{details.displayName}</span>
      <hr className="color-special-blue bg-special-blue" />
    </li>
  );
};

export default MailItem;
