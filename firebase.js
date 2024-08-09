// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARixSr1dAWO_baMOJJUCa1Eni4S6chodE",
  authDomain: "inventory-management-5ba2a.firebaseapp.com",
  projectId: "inventory-management-5ba2a",
  storageBucket: "inventory-management-5ba2a.appspot.com",
  messagingSenderId: "250388793488",
  appId: "1:250388793488:web:70c17f3415b394bc457015",
  measurementId: "G-8DF5YL109G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore }