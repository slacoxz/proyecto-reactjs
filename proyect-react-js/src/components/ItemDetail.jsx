import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Cantidad inicial

  const handleAddToCart = () => {
    addToCart({ ...item, quantity }); // Agrega el producto al carrito con la cantidad seleccionada
  };

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} className="product-image" />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      
      {/* Control de cantidad */}
      <ItemCount 
        stock={item.stock} 
        initial={quantity} 
        onChange={(qty) => setQuantity(qty)} 
      />

      {/* Botón único para agregar al carrito */}
      <button 
        className="add-cart-button" 
        onClick={handleAddToCart} 
        disabled={item.stock === 0}>
        {item.stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
      </button>
    </div>
  );
};

export default ItemDetail;
