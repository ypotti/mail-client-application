import React from "react";
import { Link } from "react-router-dom";

const MailItem = (props) => {
  const { details } = props;
  return (
    <li className="list-style-type-none">
      {details.icon}
      <p>{details.displayName}</p>
    </li>
  );
};

export default MailItem;
