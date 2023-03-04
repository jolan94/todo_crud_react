import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDRJ3QgmYDBSweyMm4XN-V1IfYXmikUa0",
  authDomain: "todo-react-crud-b7e77.firebaseapp.com",
  projectId: "todo-react-crud-b7e77",
  storageBucket: "todo-react-crud-b7e77.appspot.com",
  messagingSenderId: "246909040499",
  appId: "1:246909040499:web:528170c2fc91ce3ce17706",
  measurementId: "G-82LLK2L4H1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };