import React from 'react';
import { saveOrder } from '../services/orderService';

const Checkout = () => {
  const handleOrder = async () => {
    const order = {
      customerName: 'Juan Pérez',
      email: 'juan.perez@example.com',
      items: [
        { title: 'Set Jonia', quantity: 1, price: 90000 },
      ],
      total: 90000,
      createdAt: new Date(),
    };

    try {
      const orderId = await saveOrder(order);
      alert(`¡Pedido guardado con éxito! ID: ${orderId}`);
    } catch (error) {
      console.error('Error al guardar el pedido:', error);
      alert('No se pudo realizar el pedido.');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleOrder}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
