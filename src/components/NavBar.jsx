// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Lily Accesorios</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/electronica">Electrónica</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/indumentaria">Indumentaria</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/repuestos">Repuestos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
