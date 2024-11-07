
// src/components/ItemListContainer.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams(); // Captura el id de la categoría

    useEffect(() => {
        if (id) {
            console.log("Cargando productos para la categoría:", id);
        }
    }, [id]);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {id && <p>Mostrando productos de la categoría: {id}</p>}
        </div>
    );
};

export default ItemListContainer;
