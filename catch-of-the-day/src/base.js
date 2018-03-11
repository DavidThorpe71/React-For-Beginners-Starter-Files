import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBpRM9TC3NbsexpxrfdTZeSTTS6EXYfvvQ",
    authDomain: "catch-of-the-day-david-thorpe.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-david-thorpe.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;