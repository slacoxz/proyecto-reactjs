import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="brand">Mi Tienda</h1>
      <div className="nav-links">
        <a href="#home">Inicio</a>
        <a href="#categories">Categorías</a>
        <a href="#about">Nosotros</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="cart-container">
        <i className="fas fa-shopping-cart cart-icon"></i>
        <span className="cart-count"></span>
      </div>
    </nav>
  );
};

export default NavBar;
