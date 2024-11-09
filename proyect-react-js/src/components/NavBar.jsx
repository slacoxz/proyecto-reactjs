// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">Lily Accesorios</Link>
      <div className="nav-links">
        <Link to="/category/Collares">Collares</Link>
        <Link to="/category/Pulseras">Pulseras</Link>
        <Link to="/category/Aritos">Aritos</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
