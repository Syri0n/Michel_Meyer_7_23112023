import React from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-banner">
      <img src={logo} alt="logo Kasa" />
      <nav className="navbar">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          A propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
