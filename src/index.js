import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { products } from "./asyncMock";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//json
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9MhHhb7aeGSmD3aZjd9JIt2RVUWy4qmA",
  authDomain: "ecommerce-hyggeclothes.firebaseapp.com",
  projectId: "ecommerce-hyggeclothes",
  storageBucket: "ecommerce-hyggeclothes.appspot.com",
  messagingSenderId: "799891904974",
  appId: "1:799891904974:web:9cde920a7e276e1b1eb39f",
  measurementId: "G-KQ0MBH4ZBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

products.forEach((product) => {
  addDoc(collection(db, "products"), product)
    .then((docRef) => {
      console.log("documento agregado con id", docRef.id);
    })
    .catch((error) => {
      console.error("error al agregar el documento", error);
    });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
