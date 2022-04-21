import React from "react";
import SearchBar from "./SearchBar";
import EmailNavbar from "./EmailNavbar";
import Inbox from "./Inbox";

const Mail = () => {
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <SearchBar />
      <div className="d-flex flex-column flex-md-row w-100 bg-primary flex-grow-1 p-1">
        <EmailNavbar />
        <Inbox />
      </div>
    </div>
  );
};

export default Mail;
