import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import "./style.css";

const SearchBar = (props) => {
  const { toggleEmailNavBar, navBarHidden } = props;
  return (
    <div className="d-flex align-items-center bg-white ps-3 pe-2 pt-1 pb-1">
      <div className="pointer" onClick={() => toggleEmailNavBar(!navBarHidden)}>
        <GiHamburgerMenu className="menu-icon p-2 me-1" />
      </div>
      <div className="flex-grow-1 ">
        <input
          className="w-100 search-bar text-bold"
          placeholder="Search for Something..."
        />
      </div>
      <div className="p-relative ms-1 me-1">
        <FaBell className="bell-icon" />
        <p className="p-absolute text-center notification-number text-light bg-special-green ">
          8
        </p>
      </div>

      <button className="align-self-center logout-btn">
        <MdOutlineLogout className="logout-icon " />
        <span className="d-none d-md-inline ms-1 fw-bold">LogOut</span>
      </button>
    </div>
  );
};

export default SearchBar;
