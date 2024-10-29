import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Nombre de la Tienda</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categoría 3</a>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
