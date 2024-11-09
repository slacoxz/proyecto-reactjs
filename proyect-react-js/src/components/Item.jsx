// src/components/Item.jsx
import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => alert(`Agregado ${item.nombre} al carrito!`)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Item;
