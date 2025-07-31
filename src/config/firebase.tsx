// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-vyc58FRidqHlC3ysZt46SKAjgvbFbmw",
  authDomain: "sales-app-1c98f.firebaseapp.com",
  projectId: "sales-app-1c98f",
  storageBucket: "sales-app-1c98f.firebasestorage.app",
  messagingSenderId: "607599684367",
  appId: "1:607599684367:web:960efed35a7cf0f2fa6c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)