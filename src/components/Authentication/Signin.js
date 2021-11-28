import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

function Signin(props) {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  }

  return (
    <div>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )

}

export default Signin;