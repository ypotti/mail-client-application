import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SidebarMobile from "../components/SidebarMobile";
import "./pages.css";

const Home = () => {
  return (
    <div className="d-flex w-100 h-100">
      <Sidebar />
      <SidebarMobile />
      <Outlet />
    </div>
  );
};

export default Home;
