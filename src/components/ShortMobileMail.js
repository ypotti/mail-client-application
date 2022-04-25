import React, { useContext, useState } from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import "./style.css";
import { changeIsRead, openWindowToConfirm, getSubject } from "./ShortEmail";
import { ActionsContext } from "./Mail";

const ShortMobileMail = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { actions, setActions } = useContext(ActionsContext);
  const { details } = props;
  return (
    <div
      className={`${
        details.isRead ? "class-read" : "class-unread"
      } d-flex flex-column border-bottom border-1 pt-2 pb-2 ps-4 pe-4`}
    >
      <div className="d-flex flex-grow-1  align-items-center fw-bold text-light-blue color-inherit">
        <div>{details.from.split("@")[0]}</div>
        <div
          className={`text-end text-light rounded category-text ms-4 ${details.category}`}
        >
          <span>{details.category}</span>
        </div>
        <div className="small-font-date ms-auto">21 Apr</div>
      </div>
      <div className="d-flex align-items-center">
        {getSubject(details.sub, 30)}
        <div
          className={`ms-auto ${isOpen && "d-none"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiCaretDown />
        </div>
      </div>
      <div className={`${!isOpen && "d-none"} d-flex justify-content-between`}>
        <div
          className={`d-flex align-items-center mt-3 mb-1 justify-content-around flex-grow-1`}
        >
          {details.isRead ? (
            <div
              className="btn btn-outline-secondary d-flex align-items-center"
              onClick={() => changeIsRead(actions, setActions, details)}
            >
              <BsEyeSlash className="me-2 mini-icon-inbox" />
              <span className="small-font-date">Mark as UnRead</span>
            </div>
          ) : (
            <div
              className="btn btn-outline-secondary d-flex align-items-center"
              onClick={() => changeIsRead(actions, setActions, details)}
            >
              <BsEye className="me-2 mini-icon-inbox" />
              <span className="small-font-date">Mark as read</span>
            </div>
          )}
          <div
            className="btn btn-outline-secondary d-flex align-items-center"
            onClick={() => openWindowToConfirm(actions, setActions, details)}
          >
            <AiOutlineDelete className="mini-icon-inbox me-2" title="Delete" />
            <span className="small-font-date">Delete</span>
          </div>
        </div>
        <div
          className="logout-icon align-self-end ms-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiCaretUp />
        </div>
      </div>
    </div>
  );
};

export default ShortMobileMail;
