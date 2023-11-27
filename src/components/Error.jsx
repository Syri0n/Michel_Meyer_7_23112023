import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <span>404</span>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="back-home">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
