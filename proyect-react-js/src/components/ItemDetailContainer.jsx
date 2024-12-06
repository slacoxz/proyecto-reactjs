import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtenemos el ID del producto desde la URL
  const [loading, setLoading] = useState(true); // Estado de carga
  const [product, setProduct] = useState(null); // Estado para almacenar el producto

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Activamos estado de carga
        const productRef = doc(db, "Productos", id); // Referencia al documento
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() }); // Guardamos el producto
        } else {
          console.error("¡El producto no existe!");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false); // Desactivamos estado de carga
      }
    };

    fetchProduct();
  }, [id]);

  // Renderizamos mensajes según el estado de carga o si no existe el producto
  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Pasamos directamente el `product` al `ItemDetail`
  return (
    <div>
      <ItemDetail item={product} /> {/* Pasamos el producto como prop */}
    </div>
  );
};

export default ItemDetailContainer;
