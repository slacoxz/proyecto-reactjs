import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService'; // Asumimos que esta función está en productService

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(); // Llamada para obtener los productos
        setProducts(data); // Establece los productos en el estado
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    getProducts(); // Llamada a la función para cargar los productos cuando el componente se monta
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="product-image" /> {/* Aquí usamos 'product' correctamente */}
            <p>{product.description}</p> {/* Corregido: uso de 'description' en vez de 'Description' */}
            <p>Precio: ${product.price}</p> {/* Corregido: uso de 'price' en vez de 'item.price' */}
            <p>Stock: {product.stock}</p> {/* Corregido: uso de 'stock' en vez de 'product.Stock' */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
