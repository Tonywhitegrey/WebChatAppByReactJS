import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCJNmWLp6Kbr48GTDIEUo7g2bkOhphvPoY",
    authDomain: "reactjs-chatapp-b8330.firebaseapp.com",
    projectId: "reactjs-chatapp-b8330",
    storageBucket: "reactjs-chatapp-b8330.appspot.com",
    messagingSenderId: "1083014286017",
    appId: "1:1083014286017:web:d22a14987bea6b706be240",
    measurementId: "G-X6DN6ECEHF"
  };

  // initialize firebase 
  const app = firebase.initializeApp(firebaseConfig)
  export default app;