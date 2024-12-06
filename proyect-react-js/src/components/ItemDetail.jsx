import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Importa el contexto del carrito
import Modal from './Modal'; // Asegúrate de que la ruta sea correcta
import ItemCount from './ItemCount'; // Componente para contar unidades del producto
import './ProductDetail.css';

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Inicializa la cantidad a 1
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal

  const handleAddToCart = () => {
    addToCart({ ...item, quantity }); // Agrega el producto con la cantidad seleccionada
    setShowModal(true); // Muestra el modal
  };

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} className="product-image" />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock disponible: {item.stock}</p>
      
      {/* Cambié onAdd por onChange para que se pase correctamente el valor */}
      <ItemCount 
        stock={item.stock} 
        initial={1} 
        onChange={(qty) => setQuantity(qty)} // Cambié onAdd por onChange
      />
      
      <button className="add-cart-button" onClick={handleAddToCart}>
        Agregar al Carrito
      </button>

      {/* Modal de confirmación */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Producto Agregado</h2>
          <p>
            Has agregado {quantity} unidad(es) de "<b>{item.title}</b>" al carrito.
          </p>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
};

export default ItemDetail;
