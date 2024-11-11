// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart, getTotal } = useContext(CartContext);

  const handlePurchase = () => {
    clearCart();
    alert('Tu compra se ha completado con éxito!');
  };

  return (
    <div className="cart-page">
      <h2>Tu Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.precio}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <button onClick={handlePurchase}>Comprar</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
