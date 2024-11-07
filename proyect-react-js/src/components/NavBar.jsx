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
        <Link to="/">Inicio</Link>
        <Link to="/category/electronica">Electrónica</Link>
        <Link to="/category/indumentaria">Indumentaria</Link>
        <Link to="/category/repuestos">Repuestos</Link>
      </div>
      <div className="cart-container">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
