 import React from  'react';
 import './landing.css'
 import Button from '@mui/material/Button';
 import {buttonStyle} from '../../assets/styles.js';
 import logo from '../../assets/logo_long.png';
 import landing_img from '../../assets/landing_img.png';

 
function Landing() {
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
      		<Button variant="contained" style={buttonStyle}>
      			SIGNUP OR LOGIN AS STUDENT
      		</Button>
      		<br/>
      		OR
      		<br/>
      		<Button variant="contained" style={buttonStyle}>
      			SIGNUP OR LOGIN AS FACULTY
      		</Button>
      	</div>
      </div>

    </div>
  );
}

export default Landing;
