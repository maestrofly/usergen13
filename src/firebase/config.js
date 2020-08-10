import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAXAuMAgtL7h_ve27iWIDkBKdVyL8PjNhU",
    authDomain: "userapp-52814.firebaseapp.com",
    databaseURL: "https://userapp-52814.firebaseio.com",
    projectId: "userapp-52814",
    storageBucket: "userapp-52814.appspot.com",
    messagingSenderId: "357556619153",
    appId: "1:357556619153:web:0761f24bda436081a2bc30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;