import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserImage from "../assets/user.jpg";
import { sideBarConstants, userDetails } from "../constants";
import { SiMicrosoftoutlook } from "react-icons/si";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./style.css";

const Sidebar = () => {
  const [sideBar, setSideBar] = useState(true);
  const [selectedItem, setSelectedItem] = useState("MailBox");
  return (
    <div
      className={`d-flex flex-column bg-dark-blue side-bar-box d-none d-md-block ${
        !sideBar && "bar-width"
      } `}
    >
      <div className="" onClick={() => setSideBar(!sideBar)}>
        <IoIosArrowDroprightCircle
          className={`arrow-icon ${!sideBar && "t-180"}`}
        />
      </div>
      <div className={`${!sideBar && "d-none"} text-light p-3`}>
        <SiMicrosoftoutlook className="icon" />
      </div>
      <div
        className={`d-flex flex-column profile-box mt-4 justify-content-center ${
          sideBar && "d-none"
        }`}
      >
        <img className="profile-image" src={UserImage} alt="Profile" />
        <div>
          <p className="p-0 m-0 text-white">{userDetails.name}</p>
          <p className="text-Lblue">{userDetails.title}</p>
        </div>
      </div>
      <ul className="d-flex flex-column p-0">
        {sideBarConstants.map((ele, index) => (
          <li
            key={`${ele.displayName}${index}`}
            onClick={() => setSelectedItem(ele.displayName)}
            className={`sidebar-element p-2 ${
              ele.displayName === selectedItem && "apply-border"
            }`}
          >
            <Link
              to={ele.link}
              className={`d-flex color-handle flex-row align-items-center style-none ${
                sideBar ? "p-2" : "p-1"
              } ${ele.displayName === selectedItem && "text-white"}`}
            >
              <div>{ele.icon}</div>
              <div className={`p-2 display-name-box ${sideBar && "d-none"}`}>
                {ele.displayName}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
