import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUXolhm4v8klw8AZWbUKghLtT79f_k2Ro",
    authDomain: "crown-online-shop.firebaseapp.com",
    databaseURL: "https://crown-online-shop.firebaseio.com",
    projectId: "crown-online-shop",
    storageBucket: "crown-online-shop.appspot.com",
    messagingSenderId: "369867106360",
    appId: "1:369867106360:web:f90400ca41be8109081ecd",
    measurementId: "G-PPETMLPJ0P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;