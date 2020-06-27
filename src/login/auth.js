import React, { useState } from "react";
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
class Auth extends React.Component{

  signIn(email,password){
    if (email === "" || password === "") return -1 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(function(firebaseUser) {
      console.log("success")
      isValid = 1

    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("failed")
      isValid = 0
    });
    
  }

  login(inputAcc) { 
    setTimeout(() => this.signIn(String(inputAcc[0]), String(inputAcc[1])), 1);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var uid = user.uid;
        console.log(uid)
        isValid = 1
        // ...
      } else {
        
      }
    });
    return isValid
  }

}

export default new Auth();
