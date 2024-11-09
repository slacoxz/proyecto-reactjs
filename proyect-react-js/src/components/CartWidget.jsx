// src/components/CartWidget.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <FaShoppingCart onClick={() => setShowCart(!showCart)} /> 
      <span>{cartItems.length}</span> 
      {showCart && (
        <div className="cart-preview">
          <h3>Carrito</h3>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.nombre} - ${item.precio}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
