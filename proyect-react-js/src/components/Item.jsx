// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.nombre}</h3>
      <img src={item.imagen} alt={item.nombre} className="product-thumbnail" />
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio}</p>
      <Link to={`/item/${item.id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  );
};

export default Item;
