import "./App.css";
import firebase from "firebase/compat/app";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Main from "./Main";
import Footer from "./Footer";
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB9mm3zLTPdcUTkGkLda8-jeO1hoGux2EI",
  authDomain: "blog-page-754a5.firebaseapp.com",
  projectId: "blog-page-754a5",
  storageBucket: "blog-page-754a5.appspot.com",
  messagingSenderId: "538186058983",
  appId: "1:538186058983:web:b1cc629ae61565b511e642",
  measurementId: "G-MEWBGWH5DW",
});

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function App() {
  return (
    <div className="h-screen text-white bg-primary overflow-auto">
        <Navbar/>
        <Main/>
        {/* <Posts/>
        <Footer/> */}
    </div>
  );
}

export default App;
