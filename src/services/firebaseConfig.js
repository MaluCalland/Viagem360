import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfrh5rl2jV6RXlglQIz7Wh-obmyihZqC0",
  authDomain: "appviagem360.firebaseapp.com",
  projectId: "appviagem360",
  storageBucket: "appviagem360.firebasestorage.app",
  messagingSenderId: "217274871317",
  appId: "1:217274871317:web:35023ae3018e996477a81c",
  measurementId: "G-1Q6YLGG11P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }