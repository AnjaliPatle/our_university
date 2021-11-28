import Navigation from './components/Navigation/Navigation'
import Landing from './components/Landing/Landing'
import ClassComponent from './components/Class/Class'
//import Signin from './components/Authentication/Signin'
import './App.css';

import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCohl11CJKKINi6op8wccBMZgAlQ8VuKlk",
  authDomain: "our-university-3ba06.firebaseapp.com",
  projectId: "our-university-3ba06",
  storageBucket: "our-university-3ba06.appspot.com",
  messagingSenderId: "379481835046",
  appId: "1:379481835046:web:41058d4b80296bf75088e7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function App() {

  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="app_section">
      {/*<Navigation auth={auth}/>*/}
      {/*<div className="class_detail">
          <div className="class_detail_header">
              Operating Systems
          </div>
       </div>*/}
       <Signin auth={auth} user={user}/>
      <ClassComponent auth={auth} user={user}/>
      {/* <Landing/>*/}
      
    </div>
  );
}


function Signin() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )

}


export default App;
