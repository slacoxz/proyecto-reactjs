// src/components/ProductDetail.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = ({ item, closeDetails }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    closeDetails();
  };

  return (
    <div className="product-detail-modal">
      <div className="product-detail-content">
        <button className="close-button" onClick={closeDetails}>X</button>
        <h2>{item.nombre}</h2>
        <img src={item.imagen} alt={item.nombre} className="product-image" />
        <p>{item.descripcion}</p>
        <p>Precio: ${item.precio}</p>
        
        <div className="quantity-controls">
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>
        
        <button className="add-cart-button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
