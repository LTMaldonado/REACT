// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmmWpdfiwi67ns9ngXvjq2U64brLUahSI",
  authDomain: "shanus-react.firebaseapp.com",
  projectId: "shanus-react",
  storageBucket: "shanus-react.appspot.com",
  messagingSenderId: "378687181338",
  appId: "1:378687181338:web:99b00fe6c52e0eca7177a3",
  measurementId: "G-0M98TN6XZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)


