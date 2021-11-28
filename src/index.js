import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import firebase from "firebase";





//  const firebaseConfig = {
//   apiKey: "AIzaSyCohl11CJKKINi6op8wccBMZgAlQ8VuKlk",
//   authDomain: "our-university-3ba06.firebaseapp.com",
//   projectId: "our-university-3ba06",
//   storageBucket: "our-university-3ba06.appspot.com",
//   messagingSenderId: "379481835046",
//   appId: "1:379481835046:web:41058d4b80296bf75088e7"
// };

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();


// let auth = firebase.auth();


ReactDOM.render(
  <React.StrictMode>
	   <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//export auth;