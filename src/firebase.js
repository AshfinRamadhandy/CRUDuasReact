import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDtoslqkHxB9aD4ElsstBdx4KLWSlYv-RI",
    authDomain: "crudfirebasepbf.firebaseapp.com",
    databaseURL: "https://crudfirebasepbf.firebaseio.com",
    projectId: "crudfirebasepbf",
    storageBucket: "crudfirebasepbf.appspot.com",
    messagingSenderId: "343563375155",
    appId: "1:343563375155:web:fcfe29b43f23336a9b8946"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;