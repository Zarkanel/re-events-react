import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDANk5QQm01K4d7HjLVHQo0N2JYQtwv-1k",
    authDomain: "reevents-281819.firebaseapp.com",
    databaseURL: "https://reevents-281819.firebaseio.com",
    projectId: "reevents-281819",
    storageBucket: "reevents-281819.appspot.com",
    messagingSenderId: "1021126354978",
    appId: "1:1021126354978:web:397453f329e39ed8a0427b",
    measurementId: "G-JWFM7MHVWQ"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
  