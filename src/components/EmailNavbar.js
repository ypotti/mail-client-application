import React, { useContext } from "react";
import { emailNavbarItems, CategoryItems } from "../constants";
import Category from "./Category";
import MailItem from "./MailItem";
import { ActionsContext } from "./Mail";

const EmailNavbar = (props) => {
  const { navBarHidden } = props;
  const { actions, setActions } = useContext(ActionsContext);

  const showEmailForm = () => {
    setActions({ ...actions, isNewMail: true });
  };
  return (
    <div
      className={`d-flex flex-column bg-near-white p-3 col-12 col-md-3 ${
        !navBarHidden && "d-none"
      }`}
    >
      <button className="compose-mail-btn" onClick={showEmailForm}>
        Compose Mail
      </button>
      <div className="mt-3">
        <h6>FOLDERS</h6>
        <ul className="un-ordered-list ms-3">
          {emailNavbarItems.map((item, index) => (
            <MailItem key={index} details={item} />
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h6 className="mb-3">CATEGORIES</h6>
        <ul className="un-ordered-list ms-3">
          {CategoryItems.map((item, index) => (
            <Category key={index} details={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailNavbar;
