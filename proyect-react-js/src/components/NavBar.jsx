// src/components/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">Mi Tienda</Link>
      <div className="nav-links">
        <Link to="/category/electronica">Electrónica</Link>
        <Link to="/category/ropa">Ropa</Link>
        <Link to="/category/accesorios">Accesorios</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
