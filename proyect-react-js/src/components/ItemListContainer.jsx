// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Importa useLocation
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';
import ProductCard from './ProductCard';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true); // Estado de carga
  const { id } = useParams(); // Obtiene el ID de la categoría desde la URL
  const location = useLocation(); // Obtiene la ubicación actual

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Activa el estado de carga
      try {
        const productsCollection = collection(db, 'Productos'); // Colección de productos en Firestore
        let q;

        // Verifica si hay un `id` (categoría) en la URL, y filtra los productos por categoría
        if (id) {
          q = query(productsCollection, where('category', '==', id)); // Filtro por categoría
        } else {
          q = productsCollection; // Si no hay `id`, obtener todos los productos
        }

        const querySnapshot = await getDocs(q); // Ejecuta la consulta a Firestore
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,  // ID del documento
          ...doc.data(),  // Todos los datos del producto
        }));

        setProducts(productsData); // Establece los productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false); // Desactiva el estado de carga
      }
    };

    fetchProducts(); // Llama la función para obtener productos
  }, [id]); // Dependencia para que se ejecute cada vez que cambia el `id`

  if (loading) {
    return <p>Cargando productos...</p>; // Muestra un mensaje mientras los productos se cargan
  }

  return (
    <div>
      {/* Condicionalmente renderizamos el título solo si estamos en la ruta "/" (Home) */}
      {location.pathname === '/' && (
        <h1 className="welcome-text">Bienvenidos a nuestra tienda</h1>
      )}
      <div className="product-list">
        {products.length === 0 ? (
          <p>No se encontraron productos en esta categoría.</p>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} /> // Renderiza cada producto con ProductCard
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
