import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

const fireBaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-MEWBGWH5DW",
};

const app = firebase.initializeApp(fireBaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();

export default app;
