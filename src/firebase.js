import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2db1ZpVj_5wgQzyqWTknDHouIOGr4DMA",
  authDomain: "challenge-4d2b9.firebaseapp.com",
  projectId: "challenge-4d2b9",
  storageBucket: "challenge-4d2b9.appspot.com",
  messagingSenderId: "304243224015",
  appId: "1:304243224015:web:a1c9f49054e3cb204336ba",
  measurementId: "G-N4P28L4LKE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };