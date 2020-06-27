var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var isValid = 2
class Auth {
  signup(inputAcc) {
    if (String(inputAcc[0]) === "" || String(inputAcc[1]) === "") return -1 // invalid input (missing username or password)
    if(!(String(inputAcc[1]) === String(inputAcc[2]) )) return -2
    else 
    firebase.auth().createUserWithEmailAndPassword(String(inputAcc[0]),String(inputAcc[1]))
    .then(function(firebaseUser) {
      isValid = 1
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      isValid = 0
    });
    
    return isValid // username/password is wrong
  }
}

export default new Auth();