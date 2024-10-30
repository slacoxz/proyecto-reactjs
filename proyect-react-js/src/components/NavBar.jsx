// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
import "./NavBar.css";


const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="brand">Lily accesorios</h1>
      <div className="nav-links">
        <a href="#home">Inicio</a>
        <a href="#categories">Categorías</a>
        <a href="#about">Nosotros</a>
        <a href="#contact">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
