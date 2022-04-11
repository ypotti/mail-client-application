import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-info">
      <Link to="/Mail">mail</Link>
      <Link to="/Game">game</Link>
    </div>
  );
};

export default Sidebar;
