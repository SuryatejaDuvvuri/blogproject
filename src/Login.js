// import React, {useState, useEffect} from "react";
import app, { provider } from "./fireBaseConfig";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = ""

function Login(props) {
  const [user] = useAuthState(auth);
  const { dark } = props;

  if (user) {
    return (
      /* Dark: from-blue-300 to-orange-300 */
      <div className="flex flex-row">
        <h3 className="inline-block mx-4 px-3 py-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
          Hello, {user.displayName}!{" "}
        </h3>
        <SignOut dark={dark} />
      </div>
    );
  } else {
    return (
      <div>
        <SignIn dark={dark} />
      </div>
    );
  }
}

function SignIn(props) {
  const { dark } = props;
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button
        onClick={signInWithGoogle} /*Dark: (hover:from-red-500 to-yellow-500) */
        id="login"
        className={
          dark
            ? `inline-block px-3 py-2 text-white text-lg hover:scale-125 duration-200 
        border-white rounded-md hover:text-white hover:border-transparent 
        hover:bg-gradient-to-r from-red-500 to-yellow-500 mr-6 cursor-pointer`
            : `inline-block px-3 py-2 text-black text-lg 
        hover:scale-125 duration-200 border-white rounded-md hover:text-white 
        hover:border-transparent hover:bg-gradient-to-r from-cyan-500 to-lightFourth mr-6 cursor-pointer`
        }
      >
        Login
      </button>
    </>
  );
}

function SignOut(props) {
  const { dark } = props;
  return (
    auth.currentUser && (
      <button
        onClick={() =>
          auth.signOut()
        } /*Dark: (hover:from-red-500 to-yellow-500) */
        className={
          dark
            ? `inline-block px-3 py-2 text-lg rounded border-white hover:scale-125 duration-200 
        hover:border-transparent hover:bg-gradient-to-r from-red-500 to-yellow-500 mr-6 cursor-pointer`
            : `inline-block px-3 py-2 text-lg border rounded border-white hover:scale-125 
        duration-200 hover:border-transparent hover:bg-gradient-to-r from-cyan-500 to-lightFourth mr-6 cursor-pointer`
        }
      >
        Sign out
      </button>
    )
  );
}

export default Login;
