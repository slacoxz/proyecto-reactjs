// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './pages/CartPage';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext'; // Proveedor del carrito de compras
import './App.css';

function App() {
  return (
    <CartProvider>
      <div>
        <NavBar />
        <Routes>
          {/* Ruta para el Home con todos los productos */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a nuestra tienda" />} />

          {/* Ruta para filtrar productos por categoría */}
          <Route path="/category/:id" element={<ItemListContainer />} /> {/* Aquí se filtran por categoría */}

          {/* Ruta para ver los detalles de un producto individual */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Ruta para la página del carrito */}
          <Route path="/cart" element={<CartPage />} />

          {/* Ruta para la lista de productos (si es necesario) */}
          <Route path="/products" element={<ProductList />} />

          {/* Ruta para finalizar la compra */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
