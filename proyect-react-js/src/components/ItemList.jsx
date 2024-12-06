// src/components/ItemList.jsx
import React from 'react';
import Item from './Item'; // Componente que muestra un producto individual

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
