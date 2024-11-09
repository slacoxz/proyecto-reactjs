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
    imagen: '../src/imgs.de.productos/Collares/WhatsApp Image 2024-06-25 at 20.21.07.jpeg', 
    descripcion: 'Este es un producto electrónico de alta calidad.'
  },
  {
    id: 2,
    nombre: 'Producto 2',
    categoria: 'Collares',
    precio: 50,
    imagen: '../src/imgs.de.productos/Collares/WhatsApp Image 2024-06-25 at 20.21.06 (1).jpeg',
    descripcion: 'Ropa cómoda y a la moda para cualquier ocasión.'
  },
  {
    id: 3,
    nombre: 'Producto 3',
    categoria: 'Collares',
    precio: 30,
    imagen: '../src/imgs.de.productos/Collares/WhatsApp Image 2024-06-25 at 20.21.09.jpeg', 
    descripcion: 'Accesorios modernos y elegantes para complementar tu estilo.'
  },
  
  {
    id: 4,
    nombre: 'Producto 4',
    categoria: 'Collares',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 5,
    nombre: 'Producto 5',
    categoria: 'Collares',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 6,
    nombre: 'Producto 6',
    categoria: 'Pulseras',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 7,
    nombre: 'Producto 7',
    categoria: 'Pulseras',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 8,
    nombre: 'Producto 8',
    categoria: 'Pulseras',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 9,
    nombre: 'Producto 9',
    categoria: 'Pulseras',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 10,
    nombre: 'Producto 10',
    categoria: 'Pulseras',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 11,
    nombre: 'Producto 11',
    categoria: 'Aritos',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 12,
    nombre: 'Producto 12',
    categoria: 'Aritos',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 13,
    nombre: 'Producto 13',
    categoria: 'Aritos',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 14,
    nombre: 'Producto 14',
    categoria: 'Aritos',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
  {
    id: 15,
    nombre: 'Producto 15',
    categoria: 'Aritos',
    precio: 30,
    imagen: '', 
    descripcion: '.'
  },
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
