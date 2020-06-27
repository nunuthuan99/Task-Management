var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


class Auth {



  signup(inputAcc) {
    if (String(inputAcc[0]) === "" || String(inputAcc[1]) === "") return -1 // invalid input (missing username or password)
    if (String(inputAcc[0]) === this.listAcc[0][0] && String(inputAcc[1]) === this.listAcc[0][1]) return 1 // login completely
    return 0 // username/password is wrong
  }

  // logout(acc, cb) {
  //   this.authenticated = false;
  //   cb();
  // }

}

export default new Auth();