// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj_UgIjfX25F1v9fhkw68ciFJoTbUrTzs",
  authDomain: "portfoliobusatogabriel.firebaseapp.com",
  projectId: "portfoliobusatogabriel",
  storageBucket: "portfoliobusatogabriel.appspot.com",
  messagingSenderId: "59925229526",
  appId: "1:59925229526:web:4065467c66bc83c331be77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);



export async function sendContactData(contactData) {
  const collectionRef = collection(firestore, "Contactos");
  let res = await addDoc(collectionRef, contactData);
  return res.id;
}


