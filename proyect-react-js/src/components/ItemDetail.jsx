// src/components/ItemDetail.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Modal from './Modal'; // Asegúrate de ajustar la ruta correcta
import './ProductDetail.css';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const handleAddToCart = (count) => {
    addToCart({ ...item, quantity }); // Agrega al carrito
    setShowModal(true); // Muestra el modal
  };

  return (
    <div className="item-detail">
      <h2>{item.nombre}</h2>
      <img src={item.imagen} alt={item.nombre} className="product-image" />
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio}</p>
      <ItemCount stock={10} initial={1} onAdd={(qty) => setQuantity(qty)} />
      <button className="add-cart-button" onClick={handleAddToCart}>
        Agregar al Carrito
      </button>

      {/* Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Producto Agregado</h2>
          <p>
            Has agregado {quantity} unidad(es) de "<b>{item.nombre}</b>" al
            carrito.
          </p>
          <button onClick={() => setShowModal(false)}>Aceptar</button>
        </Modal>
      )}
    </div>
  );
};

export default ItemDetail;
