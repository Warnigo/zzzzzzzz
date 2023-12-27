import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVv3O4-gNnJQUApuNmQdc2bFF7-7yLlsU",
  authDomain: "admrt-416eb.firebaseapp.com",
  projectId: "admrt-416eb",
  storageBucket: "admrt-416eb.appspot.com",
  messagingSenderId: "495262239981",
  appId: "1:495262239981:web:21dd31d74bf9d1bad950e4",
  measurementId: "G-VDDNVTN6SM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const db = getFirestore(app);
const usersCollection = collection(db, 'users');

export { auth, googleProvider, facebookProvider, usersCollection };