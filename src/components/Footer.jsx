import React from "react";
import Logo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img src={Logo} alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
