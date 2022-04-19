import React from "react";
import SearchBar from "./SearchBar";
import EmailNavbar from "./EmailNavbar";

const Mail = () => {
  return (
    <div className="flex-grow-1 text-center d-flex flex-column">
      <SearchBar />
      <div className="d-flex w-100 bg-primary flex-grow-1 p-1">
        <EmailNavbar />
        <Inbox />
      </div>
    </div>
  );
};

export default Mail;
