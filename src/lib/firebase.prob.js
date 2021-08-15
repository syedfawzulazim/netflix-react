import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// seed database
// import { seedDatabase } from "../seed";

// config here

const config = {
    apiKey: "AIzaSyAnBFs8lf3kVI5FF34xYJEs4a9g_VT6Ak4",
    authDomain: "nelflix-react.firebaseapp.com",
    projectId: "nelflix-react",
    storageBucket: "nelflix-react.appspot.com",
    messagingSenderId: "872378720478",
    appId: "1:872378720478:web:89c8b052fad62475d9e24f"
};

const firebase = Firebase.initializeApp(config);


export { firebase };