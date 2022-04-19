import React from "react";
import { emailNavbarItems, CategoryItems } from "../constants";
import Category from "./Category";
import MailItem from "./MailItem";

const EmailNavbar = () => {
  return (
    <div className="d-flex flex-column bg-light p-2 col-3">
      <button className="compose-mail-btn">Compose Mail</button>
      <div>
        <h6>FOLDERS</h6>
        <ul>
          {emailNavbarItems.map((item, index) => (
            <MailItem key={index} details={item} />
          ))}
        </ul>
      </div>
      <div>
        <h6>CATEGORIES</h6>
        <ul>
          {CategoryItems.map((item, index) => (
            <Category key={index} details={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailNavbar;
