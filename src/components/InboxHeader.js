import React, { useContext } from "react";
import { ActionsContext } from "./Mail";
import { BiRefresh } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import "./style.css";
import Swal from "sweetalert2";

const InboxHeader = () => {
  const { actions, setActions } = useContext(ActionsContext);

  const markAllAsRead = () => {
    // Marking all Emails as Read
    Swal.fire({
      title: "Are you sure?",
      text: "Marking all Email's as Read",
      icon: "warning",
      iconColor: "#455a64",
      showCancelButton: true,
      confirmButtonColor: "#455a64",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go Ahead!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newMailItemsArray = actions.mailItemsArray.map((item) => {
          item.isRead = true;
          return item;
        });
        setActions({
          ...actions,
          mailItemsArray: [...newMailItemsArray],
        });
      }
    });
  };

  return (
    <div className="pt-4 ps-4 pe-3 pb-2 border-bottom border-2 d-flex align-items-center justify-content-between">
      <span className="inbox-heading">{actions.page} (6)</span>
      <div className="d-flex">
        <button className="inbox-btn">
          <BiRefresh className="mini-icon-inbox" />
          <span className="d-none d-md-inline ms-1" title="Refresh">
            Refresh
          </span>
        </button>
        <button
          className="inbox-btn"
          title="Mark all as Read"
          onClick={markAllAsRead}
        >
          <BsEye className="mini-icon-inbox" />
        </button>
      </div>
    </div>
  );
};

export default InboxHeader;
