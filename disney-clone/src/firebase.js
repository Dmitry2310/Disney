import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDXcazeUTzvhPZzq1l-oDVQkDtI42WTG-s",
    authDomain: "disney-clone-7dc4f.firebaseapp.com",
    projectId: "disney-clone-7dc4f",
    storageBucket: "disney-clone-7dc4f.appspot.com",
    messagingSenderId: "74008029489",
    appId: "1:74008029489:web:c301ef258771c0855ee810",
    measurementId: "G-LYXHVLHP8J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;