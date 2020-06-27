import React from "react";
import Login from './login/index'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
googleProvider: new firebase.auth.GoogleAuthProvider(),
};
function App(){

  return <Login />
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

