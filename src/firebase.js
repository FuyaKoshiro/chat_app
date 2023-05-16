import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth";
import { firebaseConfig } from "./firebaseConfig"

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth }; 