import React from "react";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav>
        <a href="/active" onClick={() => handleNavigation("/active")}>ACTIVE</a>
        <a href="/completed" onClick={() => handleNavigation("/completed")} >COMPLETED</a>
        <div id="indicator"></div>
      </nav>
    </div>
  );
};

export default Navbar;
