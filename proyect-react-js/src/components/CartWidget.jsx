// src/components/CartWidget.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  // Calcular el total de productos en el carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // Calcular el precio total del carrito
  const totalCost = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <div className="cart-widget">
      <FaShoppingCart onClick={() => setShowCart(!showCart)} />
      <span>{totalItems}</span> 
      {showCart && (
        <div className="cart-preview">
          <h3>Carrito</h3>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.nombre} - ${item.precio} x {item.quantity}</p>
            </div>
          ))}
          <p>Total: ${totalCost}</p>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
