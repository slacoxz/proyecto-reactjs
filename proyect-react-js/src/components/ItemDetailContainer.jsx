// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { productos } from './ItemListContainer'; 



const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const productoEncontrado = productos.find((prod) => prod.id === parseInt(id));
    setItem(productoEncontrado);
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
