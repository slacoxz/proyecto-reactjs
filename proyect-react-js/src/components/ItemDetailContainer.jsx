// src/components/ItemDetailContainer.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams(); // Captura el ID del producto

  useEffect(() => {
    // Lógica para cargar detalles del producto en función de `id`
    console.log("Cargando detalles del producto con ID:", id);
    // Aquí podrías llamar a tus async-mocks o funciones de API para cargar los detalles del producto
  }, [id]);

  return (
    <div>
      <h2>Detalle del Producto {id}</h2>
      {/* Renderizar los detalles del producto aquí */}
    </div>
  );
}

export default ItemDetailContainer;
