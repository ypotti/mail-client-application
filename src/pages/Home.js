import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./pages.css";

const Home = () => {
  return (
    <div className="d-flex h-100vh w-100vw">
      <Sidebar />
      {/* <div className="flex-grow-1"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};

export default Home;
