

importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyBMt3lhYcnZx5vq78Dfrl9tFyb0-ZGGSGY",
    authDomain: "quizzpushnotification.firebaseapp.com",
    projectId: "quizzpushnotification",
    storageBucket: "quizzpushnotification.appspot.com",
    messagingSenderId: "921378945496",
    appId: "1:921378945496:web:199254ab32358777cb9aad",
    measurementId: "G-G3XDHHSVWS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.messaging();