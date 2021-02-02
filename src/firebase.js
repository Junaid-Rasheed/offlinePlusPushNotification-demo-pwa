import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCsz5FPANkkBKJslZnktJmwGLLhWyV77Sc",
    authDomain: "offlinepluspushn-pwa.firebaseapp.com",
    projectId: "offlinepluspushn-pwa",
    storageBucket: "offlinepluspushn-pwa.appspot.com",
    messagingSenderId: "672717200412",
    appId: "1:672717200412:web:fc544a0f5c4f41092bd3d9"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
  