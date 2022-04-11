import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./pages.css";

const Home = () => {
  return (
    <div className="d-flex h-100vh w-100vw bg-warning">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
