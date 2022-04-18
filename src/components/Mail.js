import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import EmailNavbar from "./EmailNavbar";

const Mail = () => {
  return (
    <div className="bg-warning flex-grow-1 text-center">
      <SearchBar />
      <div className="d-flex w-100 bg-warning">
        <EmailNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Mail;
