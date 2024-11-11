// src/components/CartWidget.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart size={24} />
      <span>{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
