import React from "react";
import { Link } from "react-router-dom";

const EmailNavbar = () => {
  return (
    <div className="bg-info">
      <p>EmailNavbar</p>
      <Link to="/mail/inbox">Inbox</Link>
      <Link to="/mail/outbox">sent</Link>
    </div>
  );
};

export default EmailNavbar;
