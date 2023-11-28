import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./components/Error";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" de gérer les erreurs de routes qui n'existent pas(404) */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
