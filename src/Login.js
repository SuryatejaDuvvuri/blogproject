// import React, {useState, useEffect} from "react";
import app, { provider } from "./fireBaseConfig";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = app.auth();

function Login() {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <div className="flex flex-row">
        <h3 className="inline-block px-3 py-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
          Hello, {user.displayName}!{" "}
        </h3>
        <SignOut />
      </div>
    );
  } else {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button
        onClick={signInWithGoogle}
        id="login"
        className="inline-block px-3 py-2 text-lg border rounded border-white hover:border-transparent hover:bg-gradient-to-r from-red-500 to-yellow-500 mr-6 cursor-pointer"
      >
        Login
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        onClick={() => auth.signOut()}
        className="inline-block px-4 py-2 text-lg border rounded border-white hover:border-transparent hover:bg-gradient-to-r from-red-500 to-yellow-500 mr-6 cursor-pointer"
      >
        Sign out
      </button>
    )
  );
}

export default Login;
