import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDEaANTu0Vtl43L_terpRz3FeKtbnMngW8",
    authDomain: "slack-clone-11065.firebaseapp.com",
    projectId: "slack-clone-11065",
    storageBucket: "slack-clone-11065.appspot.com",
    messagingSenderId: "560167696630",
    appId: "1:560167696630:web:19556ea6cee563884f54d7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}