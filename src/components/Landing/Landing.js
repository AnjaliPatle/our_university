 import React from  'react';
 import './landing.css'
 import Button from '@mui/material/Button';
 import {buttonStyle} from '../../assets/styles.js';
 import logo from '../../assets/logo_long.png';
 import landing_img from '../../assets/landing_img.png';
 import firebase from 'firebase';

 
function Landing(props) {

  const handleSignInButton = (type) =>{
    props.setLoginType(type);
    signInWithGoogle();
  }
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }
  return (
    <div className="landing">
      <div className="landing-second-section">
      	<img src={landing_img} className="landing-img"/>
      	<img src={logo} className="landing-logo"/>
      </div>
      <div className="landing-first-section gradient_background">
      	<div className="landing-text-1">
      		A SINGLE PLATFORM 
      		<div className="landing-text-2">
      			For All Your Class Management Needs
      		</div>
      	</div>
      	
      	<div className="landing-login">
      		<Button variant="contained" 
            style={buttonStyle}
            onClick={()=>handleSignInButton('student')}
          >
      			SIGNIN AS STUDENT WITH GOOGLE
      		</Button>
      		<br/>
      		OR
      		<br/>
      		<Button variant="contained" 
            style={buttonStyle}
            onClick={()=>handleSignInButton('faculty')}
          >
      			SIGNUP AS FACULTY WITH GOOGLE
      		</Button>
      	</div>
      </div>

    </div>
  );
}

export default Landing;
