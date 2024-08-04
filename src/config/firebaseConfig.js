// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCza-UoD4npE3qxVUh93JKFadZZi1BXHKw",
  authDomain: "hosting-5679e.firebaseapp.com",
  projectId: "hosting-5679e",
  storageBucket: "hosting-5679e.appspot.com",
  messagingSenderId: "948280845021",
  appId: "1:948280845021:web:957cb294600dbf2682f134",
  measurementId: "G-V1LLGLM8M2"
};
  
export const app = initializeApp(firebaseConfig);
export default app;

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


// Initialize Firebase
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};