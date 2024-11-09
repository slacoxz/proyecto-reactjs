// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const productos = [
  { id: 1, nombre: 'Producto 1', categoria: 'electronica', precio: 100 },
  { id: 2, nombre: 'Producto 2', categoria: 'ropa', precio: 50 },
  { id: 3, nombre: 'Producto 3', categoria: 'accesorios', precio: 30 },
  // Agrega más productos según sea necesario
];

const ItemListContainer = ({ greeting }) => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = categoryId 
      ? productos.filter((prod) => prod.categoria === categoryId) 
      : productos;
    setItems(filteredItems);
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div className="product-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
