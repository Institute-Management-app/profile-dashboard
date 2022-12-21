import React from "react";
import "./Navbar.css";

const Navbar = ({ openSidebar, title }) => {
  return (
    <div>
      <div className="tool-bar">
        <div className="burger" onClick={openSidebar}>
          <i className="ri-menu-line"></i>
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default Navbar;
