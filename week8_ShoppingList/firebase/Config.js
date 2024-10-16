
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, deleteDoc, doc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY_TÄHÄN,
  authDomain: "shoppinglist-e369d.firebaseapp.com",
  projectId: "shoppinglist-e369d",
  storageBucket: "shoppinglist-e369d.appspot.com",
  messagingSenderId: "686998723903",
  appId: "1:686998723903:web:47d581c8649a0fda5c078a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const PRODUCTS = 'products';

export{
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    doc,
    deleteDoc,
    PRODUCTS
}