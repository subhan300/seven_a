
import firebase from "firebase"
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


  const messaging=firebase.messaging();
export function initNotification(){
    console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      messaging.getToken().then((currentToken)=>{
          if(currentToken){
              console.log(currentToken)
          }else{
              console.log("no instance token availabe")
          }
      }).catch((error)=>{
          console.log("error",error)
      })
     
      } 
    });
    // [END request_permission]
  }
