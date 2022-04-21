import React from "react";

const MailItem = (props) => {
  const { details } = props;
  return (
    <li className="d-flex flex-row align-items-center pointer">
      {details.icon}
      <span>{details.displayName}</span>
      <hr className="color-special-blue bg-special-blue"/>
    </li>
  );
};

export default MailItem;
