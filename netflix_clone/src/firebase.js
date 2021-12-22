// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import * as auth from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCCSVMZodrFzSbW4E2TpH1AF-PpJHtlV9k",
  authDomain: "netflix-clone-513bd.firebaseapp.com",
  projectId: "netflix-clone-513bd",
  storageBucket: "netflix-clone-513bd.appspot.com",
  messagingSenderId: "756331438289",
  appId: "1:756331438289:web:be493e5e4e39e4844e65f0",
  measurementId: "G-01B6M0L3SD"
};

const firebaseApp=initializeApp(firebaseConfig);
const db = getFirestore();


export { auth };
export default db;