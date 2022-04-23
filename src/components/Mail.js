import React, { createContext, useState } from "react";
import SearchBar from "./SearchBar";
import EmailNavbar from "./EmailNavbar";
import EmailForm from "./EmailForm";
import Inbox from "./Inbox";
import { userDetails, actionDetails } from "../constants";

export const UserContext = createContext();
export const ActionsContext = createContext();

const Mail = () => {
  const [isNavBarHide, setIsNavBarHide] = useState(true);
  const [user, setUser] = useState(userDetails);
  const [actions, setActions] = useState(actionDetails);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ActionsContext.Provider value={{ actions, setActions }}>
        <div className="flex-grow-1 d-flex flex-column">
          <SearchBar
            toggleEmailNavBar={setIsNavBarHide}
            navBarHidden={isNavBarHide}
          />
          <div
            className={`d-flex flex-column flex-md-row bg-near-white flex-grow-1 inbox-container`}
          >
            <EmailNavbar navBarHidden={isNavBarHide} />
            <Inbox />
          </div>
          <EmailForm />
        </div>
      </ActionsContext.Provider>
    </UserContext.Provider>
  );
};

export default Mail;
