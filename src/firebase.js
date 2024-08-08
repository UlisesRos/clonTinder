import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV32-8Z_sSJk5wSOrnHUu2ZY9GRpwrL94",
    authDomain: "tinder-web-c8383.firebaseapp.com",
    projectId: "tinder-web-c8383",
    storageBucket: "tinder-web-c8383.appspot.com",
    messagingSenderId: "1024797219505",
    appId: "1:1024797219505:web:428bc018ae409a63dd2090"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const database = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, database };