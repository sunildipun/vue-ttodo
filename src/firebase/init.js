import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDj2-JFAL6ogw143U-uQFVCuSHGyCDP4rc",
    authDomain: "todo-app-c159e.firebaseapp.com",
    databaseURL: "https://todo-app-c159e.firebaseio.com",
    projectId: "todo-app-c159e",
    storageBucket: "todo-app-c159e.appspot.com",
    messagingSenderId: "22979658537",
    appId: "1:22979658537:web:5781ddddf658e5e2eead38",
    measurementId: "G-WZ9N775H7Y"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Export firestore Database
export default firebaseApp.firestore();