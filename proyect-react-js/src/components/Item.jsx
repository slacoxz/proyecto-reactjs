// src/components/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item">
      <h3>{product.title}</h3>
      <p>Precio: ${product.Price}</p>
      <Link to={`/item/${product.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;
