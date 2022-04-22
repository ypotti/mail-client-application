import React, { useContext } from "react";
import { ActionsContext } from "./Mail";
import { BiRefresh } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import "./style.css";
const InboxHeader = () => {
  const { actions, setActions } = useContext(ActionsContext);
  return (
    <div className="pt-4 ps-4 pe-3 pb-2 border-bottom border-2 d-flex align-items-center justify-content-between">
      <span className="inbox-heading">{actions.page} (6)</span>
      <div className="d-flex">
        <button className="inbox-btn">
          <BiRefresh className="mini-icon-inbox" />
          <span className="d-none d-md-inline ms-1">Refresh</span>
        </button>
        <button className="inbox-btn" title="Mark all as Read">
          <BsEye className="mini-icon-inbox" />
        </button>
      </div>
    </div>
  );
};

export default InboxHeader;
