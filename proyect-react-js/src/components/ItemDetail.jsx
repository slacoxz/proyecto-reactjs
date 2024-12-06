import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Modal from "./Modal"; // Ruta correcta del modal
import ItemCount from "./ItemCount";
import "./ProductDetail.css";

const ItemDetail = () => {
  const { id } = useParams(); // Obtenemos el ID del producto desde la URL
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState(null); // Estado para guardar el producto
  const [quantity, setQuantity] = useState(1); // Cantidad inicial 1
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true); // Activamos el estado de carga
        const docRef = doc(db, "Productos", id); // Referencia al documento en Firestore
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setItem({ id: docSnap.id, ...data }); // Guardamos los datos del producto
        } else {
          console.error("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto: ", error);
      } finally {
        setLoading(false); // Desactivamos el estado de carga
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    addToCart({ ...item, quantity }); // Agrega el producto al carrito
    setShowModal(true); // Muestra el modal
  };

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!item) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="item-detail">
      {/* Título del producto */}
      <h2>{item.title || "Producto sin título"}</h2>
      
      {/* Imagen del producto */}
      <img
        src={item.image || "url_de_imagen_predeterminada.jpg"} // Imagen predeterminada si no existe
        alt={item.title || "Producto sin imagen"}
        className="product-image"
      />
      
      {/* Descripción del producto */}
      <p>{item.description || "Descripción no disponible"}</p>
      
      {/* Precio del producto */}
      <p>
        <strong>Precio:</strong> ${item.price || "N/A"}
      </p>

      {/* Stock disponible */}
      <p>
        <strong>Stock disponible:</strong> {item.stock || 0}
      </p>

      {/* Contador de cantidad */}
      <ItemCount
        stock={item.stock || 0} // Asegura que el stock no sea 0 si no está definido
        initial={1}
        onAdd={(qty) => setQuantity(qty)}
      />

      {/* Botón para agregar al carrito */}
      <button
        className="add-cart-button"
        onClick={handleAddToCart}
        disabled={item.stock === 0}
      >
        {item.stock === 0 ? "Sin Stock" : "Agregar al Carrito"}
      </button>

      {/* Modal para confirmación de producto agregado */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Producto Agregado</h2>
          <p>
            Has agregado {quantity} unidad(es) de "<b>{item.title}</b>" al carrito.
          </p>
          <button onClick={() => setShowModal(false)}>Aceptar</button>
        </Modal>
      )}
    </div>
  );
};

export default ItemDetail;
