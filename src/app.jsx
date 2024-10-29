// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#4b0082', minHeight: '100vh' }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi e-commerce" />} />
          <Route path="/electronica" element={<ItemListContainer greeting="Sección de Electrónica" />} />
          <Route path="/indumentaria" element={<ItemListContainer greeting="Sección de Indumentaria" />} />
          <Route path="/repuestos" element={<ItemListContainer greeting="Sección de Repuestos" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
