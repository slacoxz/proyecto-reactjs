// src/components/CartWidget.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} color="white" />
      <span className="badge badge-pill badge-primary ml-1">2</span>
    </div>
  );
};

export default CartWidget;
