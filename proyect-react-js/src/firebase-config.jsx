// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC060CGb-w57_yh9xXUUJqJa8z6VRoZTDI",
  authDomain: "lilyaccesorios-dc459.firebaseapp.com",
  projectId: "lilyaccesorios-dc459",
  storageBucket: "lilyaccesorios-dc459.firebasestorage.app",
  messagingSenderId: "956465894053",
  appId: "1:956465894053:web:9c15105f668eb78236b34c"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
