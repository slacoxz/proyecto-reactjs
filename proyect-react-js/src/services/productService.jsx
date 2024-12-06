// src/services/productService.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config'; 

export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Productos')); // Obtiene todos los productos de la colección 'Productos'
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(), // Los datos del documento Firestore
    }));
    return products;
  } catch (error) {
    console.error('Error al obtener los productos desde Firestore:', error);
    throw error; // Lanza el error para que el componente lo pueda manejar
  }
};
