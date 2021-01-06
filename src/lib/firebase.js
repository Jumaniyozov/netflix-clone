import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from "../seed";
////// seedDatabase(firebase);

const config = {
    apiKey: "AIzaSyB_cNqFDxRCf-YzcstVpYTDw2WY2srvJEw",
    authDomain: "netflix-clone-69686.firebaseapp.com",
    projectId: "netflix-clone-69686",
    storageBucket: "netflix-clone-69686.appspot.com",
    messagingSenderId: "1077731646361",
    appId: "1:1077731646361:web:8f4d12a69083181f4c5108"
};

const firebase = Firebase.initializeApp(config);


export {firebase};
