import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para navegar a la página de detalles del producto
import './ProductCard.css'; // Asegúrate de tener los estilos correctos

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <div className="image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <p className="product-description">{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock disponible:</strong> {product.stock}</p>
      <Link to={`/item/${product.id}`} className="view-details-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default ProductCard;
