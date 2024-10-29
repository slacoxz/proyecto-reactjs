import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="fas fa-shopping-cart"></i> {/* Usa un ícono de carrito de FontAwesome o de tu preferencia */}
            <span className="badge badge-pill badge-primary">3</span> {/* Número fijo */}
        </div>
    );
};

export default CartWidget;
