import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Modal from "../components/Modal"; // Importa el modal
import { saveOrder } from "../services/orderService"; // Servicio para guardar el pedido
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, clearCart, getTotal } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "", address: "" });
  const [orderId, setOrderId] = useState(null);
  const [showModal, setShowModal] = useState(false); // Controla el modal de compra
  const [errors, setErrors] = useState({}); // Para manejar errores
  const [isFormValid, setIsFormValid] = useState(true); // Para manejar el estado del formulario

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name]: value,
    });
  };

  // Validación de los campos
  const validateForm = () => {
    const newErrors = {};

    if (!buyer.name) {
      newErrors.name = "El nombre es obligatorio.";
    }

    // Validación del email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!buyer.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(buyer.email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newOrder = {
        buyer,
        items: cartItems,
        total: getTotal(),
        date: new Date(),
      };

      try {
        const generatedId = await saveOrder(newOrder);
        setOrderId(generatedId);
        clearCart();
        setShowModal(true); // Muestra el modal de compra
      } catch (error) {
        console.error("Error al guardar el pedido:", error);
      }
    }
  };

  useEffect(() => {
    validateForm();
  }, [buyer]);

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price * item.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="total">
            Total: ${getTotal() % 1 === 0 ? getTotal().toFixed(0) : getTotal().toFixed(2)}
          </h3>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={buyer.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? "error" : ""}`}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={buyer.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "error" : ""}`}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={buyer.address}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-btn" disabled={!isFormValid}>
              Finalizar compra
            </button>
          </form>
        </>
      )}

      {showModal && orderId && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>¡Gracias por tu compra!</h2>
          <p>
            Tu ID de pedido es: <b>{orderId}</b>
          </p>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
};

export default CartPage;
