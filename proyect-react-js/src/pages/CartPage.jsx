// src/pages/CartPage.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, clearCart, getTotal } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: '', email: '', address: '' });
  const [orderId, setOrderId] = useState(null);

  const handlePurchase = () => {
    const newOrder = {
      buyer,
      items: cartItems,
      total: getTotal(),
      date: new Date(),
    };

    // Simulación de generación de ID único (luego se reemplazará por Firebase)
    const generatedId = Math.random().toString(36).substring(2, 9);
    setOrderId(generatedId);
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>
      {orderId ? (
        <p>¡Gracias por tu compra! Tu ID de pedido es: <b>{orderId}</b></p>
      ) : cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.nombre}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.precio * item.quantity}</p>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotal()}</h3>
          <form>
            <input
              type="text"
              placeholder="Nombre"
              value={buyer.name}
              onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={buyer.email}
              onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Dirección"
              value={buyer.address}
              onChange={(e) => setBuyer({ ...buyer, address: e.target.value })}
            />
          </form>
          <button onClick={handlePurchase}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
