import React, { useState } from "react";
import SearchBar from "./SearchBar";
import EmailNavbar from "./EmailNavbar";
import Inbox from "./Inbox";

const Mail = () => {
  const [isNavBarHide, setIsNavBarHide] = useState(true);
  return (
    <div className="flex-grow-1 d-flex flex-column">
      <SearchBar
        toggleEmailNavBar={setIsNavBarHide}
        navBarHidden={isNavBarHide}
      />
      <div
        className={`d-flex flex-column flex-md-row w-100 bg-light flex-grow-1 ${
          isNavBarHide && "p-1 pt-md-3 pe-md-2 pb-md-0"
        }`}
      >
        <EmailNavbar navBarHidden={isNavBarHide} />
        <Inbox />
      </div>
    </div>
  );
};

export default Mail;
