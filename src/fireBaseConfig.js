import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

const fireBaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  measurementId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const app = firebase.initializeApp(fireBaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();

export default app;
