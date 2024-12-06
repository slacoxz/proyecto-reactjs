import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

// Función para guardar un pedido
export const saveOrder = async (order) => {
  try {
    const orderCollection = collection(db, 'Orders'); // Guarda los datos de la compra en otra coleccion
    const docRef = await addDoc(orderCollection, order);
    return docRef.id; // Retorna el ID del pedido guardado
  } catch (e) {
    console.error('Error al guardar el pedido: ', e);
    throw new Error('No se pudo guardar el pedido');
  }
};
