import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyBdlcY4s9MYB-YCVzqkKUe1UtdetxqV5lo",
    authDomain: "aligram-a8107.firebaseapp.com",
    projectId: "aligram-a8107",
    storageBucket: "aligram-a8107.appspot.com",
    messagingSenderId: "681250017167",
    appId: "1:681250017167:web:bc74d48c975cd7186405fa"
  }).auth();