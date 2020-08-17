import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhPFjzlDsezMIib2WFQDMBVt978ufiUY4",
    authDomain: "crwn-db-43c1c.firebaseapp.com",
    databaseURL: "https://crwn-db-43c1c.firebaseio.com",
    projectId: "crwn-db-43c1c",
    storageBucket: "crwn-db-43c1c.appspot.com",
    messagingSenderId: "650433373409",
    appId: "1:650433373409:web:370d02fa9db598fd8283a0",
    measurementId: "G-926R8T9MZD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;