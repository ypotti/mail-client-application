import React from "react";
import "./style.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const ShortEmail = (props) => {
  const { details } = props;

  return (
    <tr
      className={`${
        details.isRead ? "class-read" : "class-unread"
      } pointer table-row`}
    >
      <td className="ps-4 d-flex align-items-center justify-content-between name-cell">
        <span>{details.from.split("@")[0]}</span>
        <div
          className={`text-end text-light me-2 rounded category-text ${details.category}`}
        >
          <span>{details.category}</span>
        </div>
      </td>
      <td className="content-cell">
        <span>{details.sub}</span>
      </td>
      <td className="text-end pe-4">23:05 - Apr-21</td>
      <td className="icons-cell fw-bold">
        {details.isRead ? (
          <BsEyeSlash className="me-3 mini-icon-inbox" title="Mark as UnRead" />
        ) : (
          <BsEye className="me-3 mini-icon-inbox" title="Mark as Read" />
        )}
        <AiOutlineDelete className="mini-icon-inbox " title="Delete" />
      </td>
    </tr>
  );
};

export default ShortEmail;
