// src/components/Item.jsx
import React, { useState } from 'react';
import ProductDetail from './ProductDetail';

const Item = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="item-card">
      <h3>{item.nombre}</h3>
      <img src={item.imagen} alt={item.nombre} className="product-thumbnail" />
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio}</p>
      <button onClick={() => setShowDetails(true)}>Ver Detalles</button>

      {showDetails && (
        <ProductDetail
          item={item}
          closeDetails={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default Item;
