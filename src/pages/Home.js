import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./pages.css";

const Home = () => {
  return (
    <div className="d-flex w-100 h-100">
      <Sidebar />
      {/* <div className="flex-grow-1"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default Home;
