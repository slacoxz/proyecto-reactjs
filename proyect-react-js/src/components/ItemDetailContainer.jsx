// src/components/ItemDetailContainer.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams(); // Captura el id del producto

    useEffect(() => {
        console.log("Cargando detalles del producto con ID:", id);
    }, [id]);

    return (
        <div className="item-detail-container">
            <h2>Detalle del Producto {id}</h2>
            {/* Aquí irán los detalles del producto */}
        </div>
    );
};

export default ItemDetailContainer;
