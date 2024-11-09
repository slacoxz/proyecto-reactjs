// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    categoria: 'Collares',
    precio: 100,
    imagen: 'https://via.placeholder.com/150', 
    descripcion: 'Este es un producto electrónico de alta calidad.'
  },
  {
    id: 2,
    nombre: 'Producto 2',
    categoria: 'Collares',
    precio: 50,
    imagen: 'https://via.placeholder.com/150',
    descripcion: 'Ropa cómoda y a la moda para cualquier ocasión.'
  },
  {
    id: 3,
    nombre: 'Producto 3',
    categoria: 'Collares',
    precio: 30,
    imagen: 'https://via.placeholder.com/150', 
    descripcion: 'Accesorios modernos y elegantes para complementar tu estilo.'
  }
  
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
