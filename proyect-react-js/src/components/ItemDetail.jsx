// src/components/ItemDetail.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import './ProductDetail.css';

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    alert(`Añadiste ${quantity} unidad(es) de "${item.nombre}" al carrito.`);
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
    </div>
  );
};

export default ItemDetail;
