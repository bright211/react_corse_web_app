import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
import { firebaseConfig } from "../utils/config";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const realDb = firebase.database();
export const db = firebase.firestore();
export const auth = firebase.auth()
export const storage = firebase.storage()