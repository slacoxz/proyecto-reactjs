import React, { createContext, useState } from "react";

// Crea el contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: product.quantity }];
    });
  };

  // Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCartItems([]); // Vacía el carrito
  };

  // Obtener el total de la compra
  const getTotal = () => {
    const total = cartItems
      .reduce((acc, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = item.quantity || 0;
        return acc + price * quantity;
      }, 0);
    return total; // Devolvemos el total sin formatear, lo haremos en el componente
  };

  // Proveedor del contexto
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart, // Asegúrate de que `clearCart` esté aquí
        getTotal,  // Asegúrate de que `getTotal` esté aquí
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
