import { initializeApp } from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCohl11CJKKINi6op8wccBMZgAlQ8VuKlk",
  authDomain: "our-university-3ba06.firebaseapp.com",
  projectId: "our-university-3ba06",
  storageBucket: "our-university-3ba06.appspot.com",
  messagingSenderId: "379481835046",
  appId: "1:379481835046:web:41058d4b80296bf75088e7"
};

initializeApp(firebaseConfig);

const FireBase = initializeApp(firebaseConfig);
export default FireBase;