import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Bienvenido a nuestra tienda" />
        </div>
    );
}

export default App;
