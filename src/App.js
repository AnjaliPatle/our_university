import React, {useState, useEffect} from 'react'
import Navigation from './components/Navigation/Navigation'
import Landing from './components/Landing/Landing'
import ClassComponent from './components/Class/Class'
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

  const [loading, setLoading] = useState(false);
  const [openSignin, setOpenSignIn] = useState(false);
  const [loginType, setLoginType] = useState('student');
  const [classDetails, setClassDetails] = useState('');
  const [user] = useAuthState(auth);


  useEffect(() => {

    if(user!=null){
      setLoading(true);
      const db = firebase.firestore();
      //if its a new user
      db.collection("Users").get().then((querySnapshot) => {
          let userExists=false;
          querySnapshot.forEach((doc) => {
              let userFromDB= doc.data();
              if(!userExists && userFromDB.uid == auth.currentUser.uid){
                  setLoginType(userFromDB.type);
                  userExists=true;
              }
          });

          //if user doesn't exist
          if(userExists === false){
              db.collection("Users").doc().set({
                  uid:auth.currentUser.uid,
                  type:loginType,
                  classes:[]
              })
              .then(() => {
                  console.log("Document successfully written!");
              })
              .catch((error) => {
                  console.error("Error writing document: ", error);
              });
          }

          getClassDetails();
      }).catch((error) => {
        setLoading(false);
          console.log("Error getting document:", error);
      });         
      
    }


  },[user]);

  const getClassDetails = () =>{
    const db = firebase.firestore();
    db.collection("Classes").limit(1).get().then((querySnapshot) => {
          let userExists=false;
          querySnapshot.forEach((doc) => {
            setClassDetails({
              classId:doc.id,
              name:doc.data().name
            })
          });

          setLoading(false);
      }).catch((error) => {
        setLoading(false);
          console.log("Error getting class details:", error);
      });
  }
console.log("whyyy",classDetails)
  return (
    <div className="app_section">
      { loading? <>Loading... </>:
        !user?
          <Landing setLoginType={setLoginType} setOpenSignIn={setOpenSignIn} auth={auth} user={user}/>
          :
          <div>
            <Navigation auth={auth}/>
                  <div className="class_detail">
                      <div className="class_detail_header">
                          {classDetails? classDetails.name : ''}
                      </div>
                   </div>
                   <ClassComponent auth={auth} user={user} userType={loginType} classDetails={classDetails}/>
              </div>
      }
    </div>
  );
}


export default App;
