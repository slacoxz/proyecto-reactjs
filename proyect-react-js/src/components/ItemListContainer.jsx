// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';

const productos = [
  {
    id: 1,
    nombre: 'Conjunto de Joyas Esplendor de Cristal',
    categoria: 'Collares',
    precio: 80000,
    imagen: '../src/imgs.de.productos/Collares/Hcd837693c711430595176c639e4dd48fv.jpg_720x720q50.avif', 
    descripcion: 'Conjunto de collar y aretes con cristales relucientes, ideal para ocasiones especiales.'
  },
  {
    id: 2,
    nombre: 'Set de Collar y Aretes Brillo Eterno',
    categoria: 'Collares',
    precio: 90000,
    imagen: '../src/imgs.de.productos/Collares/D_NQ_NP_712021-CBT79478823727_092024-O.webp',
    descripcion: 'Joyas elegantes con diseño de cristales, perfectas para agregar un toque de glamour a tu estilo.'
  },
  {
    id: 3,
    nombre: 'Juego de Lujo en Cristal Plata',
    categoria: 'Collares',
    precio: 75000,
    imagen: '../src/imgs.de.productos/Collares/81vgqPZTFqL._AC_UY1000_.jpg', 
    descripcion: 'Accesorios modernos y elegantes para complementar tu estilo con un brillo sofisticado.'
  },
  
  {
    id: 4,
    nombre: 'Collar Elegancia Intemporal',
    categoria: 'Collares',
    precio: 60000,
    imagen: '../src/imgs.de.productos/Collares/61mn2zN6NJL._AC_UY1000_.jpg', 
    descripcion: 'Collar clásico adornado con detalles brillantes, ideal para cualquier ocasión elegante.'
  },
  {
    id: 5,
    nombre: 'Conjunto de Joyas Oscuro Encanto',
    categoria: 'Collares',
    precio: 40000,
    imagen: '../src/imgs.de.productos/Collares/41tgZVVpMgL._AC_QL92_SH45_UL240_SR240,220_.jpg', 
    descripcion: 'Hermoso collar y aretes en negro, perfecto para quienes buscan un estilo único y elegante.'
  },
  {
    id: 6,
    nombre: 'Pulsera de Cuentas Ónix y Oro',
    categoria: 'Pulseras',
    precio: 32000,
    imagen: '../src/imgs.de.productos/Pulseras/7f3afa2d5757d72989a72cb76f4ed7a1.jpg', 
    descripcion: 'Pulsera elegante de cuentas negras de ónix con detalles dorados, ideal para un look sofisticado.'
  },
  {
    id: 7,
    nombre: 'Pulsera de Perlas y Cristales Rosados',
    categoria: 'Pulseras',
    precio: 25000,
    imagen: '../src/imgs.de.productos/Pulseras/copia-31-a930633274990b3a0316393353996491-1024-1024.jpg', 
    descripcion: 'Delicada pulsera hecha con perlas y cristales rosados, perfecta para añadir un toque de feminidad.'
  },
  {
    id: 8,
    nombre: 'Pulsera de Onix con Corona Dorada',
    categoria: 'Pulseras',
    precio: 35000,
    imagen: '../src/imgs.de.productos/Pulseras/d0b6f1d31002fe20a9908039c5fd5a6a.jpg', 
    descripcion: 'Pulsera de ónix negro con una corona dorada en el centro, para un estilo moderno y distinguido.'
  },
  {
    id: 9,
    nombre: 'Brazalete Turquesa de Verano',
    categoria: 'Pulseras',
    precio: 20000,
    imagen: '../src/imgs.de.productos/Pulseras/il_570xN.5956967948_gyi5.avif', 
    descripcion: 'razalete en tonos turquesa que evoca frescura y elegancia para cualquier ocasión.'
  },
  {
    id: 10,
    nombre: 'Pulsera de Cadena Dorada Clásica',
    categoria: 'Pulseras',
    precio: 55000,
    imagen: '../src/imgs.de.productos/Pulseras/istockphoto-1282534652-612x612.jpg', 
    descripcion: 'Pulsera dorada con eslabones clásicos, una pieza esencial para cualquier joyero.'
  },
  {
    id: 11,
    nombre: 'Aretes de Perla Clásicos',
    categoria: 'Aritos',
    precio: 20000,
    imagen: '../src/imgs.de.productos/Aritos/4-1-600ef2-60146a87070af_1080x.webp', 
    descripcion: 'Elegantes aretes de perla con detalles dorados, ideales para cualquier ocasión formal o casual.'
  },
  {
    id: 12,
    nombre: 'Solaria',
    categoria: 'Aritos',
    precio: 60000,
    imagen: '../src/imgs.de.productos/Aritos/D_NQ_NP_875240-MLU74022910954_012024-O.webp', 
    descripcion: ' Brillantes aretes con diseño de sol dorado, perfectos para añadir un toque de luminosidad a tu estilo.'
  },
  {
    id: 13,
    nombre: 'Bandel',
    categoria: 'Aritos',
    precio: 54000,
    imagen: '../src/imgs.de.productos/Aritos/foto-macro-intrincados-aretes-vidrio-terminados-creados-ai-generativa_419341-73085.avif', 
    descripcion: 'Aretes con cristales multicolor, que capturan y reflejan la luz de una manera espectacular.'
  },
  {
    id: 14,
    nombre: 'Aretes Florales con Perla',
    categoria: 'Aritos',
    precio: 15000,
    imagen: '../src/imgs.de.productos/Aritos/istockphoto-1289163992-612x612.jpg', 
    descripcion: 'Delicados aretes con diseño de flor dorada y perla en el centro, ideales para un estilo femenino y sofisticado.'
  },
  {
    id: 15,
    nombre: 'Jonias',
    categoria: 'Aritos',
    precio: 90000,
    imagen: '../src/imgs.de.productos/Aritos/sda.png', 
    descripcion: ' Aretes en forma de estrella con incrustaciones brillantes, para un look llamativo y elegante.'
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
