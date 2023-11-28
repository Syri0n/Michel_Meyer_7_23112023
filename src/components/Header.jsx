import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="logo-header">
        <img src={logo} alt="logo Kasa" />
      </NavLink>
      <nav className="navbar">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
