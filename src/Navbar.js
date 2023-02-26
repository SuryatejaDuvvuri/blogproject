import { WiDaySunny } from "react-icons/wi";
import Login from "./Login";

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// const whenSignedIn = document.getElementById("loggedIn");
// const whenSignedOut = document.getElementById("loggedOut");

// const signInBtn = document.getElementById("logIn");
// const signOutBtn = document.getElementById("logout");

// const userDetails = document.getElementById("userDetails");

// signInBtn.onclick = () => auth.signInWithPopup(provider);

// signOutBtn.onclick = () => auth.signOut();

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     whenSignedIn.hidden = false;
//     whenSignedOut.hidden = true;
//     userDetails.innerHTML = `<h3>Hello ${user.displayName}! </h3> <p>User ID: ${user.uid}</p>`;
//   } else {
//     whenSignedIn.hidden = true;
//     whenSignedOut.hidden = false;
//     userDetails.innerHTML = ``;
//   }
// });

const bar = () => {
  return (
    <nav className="inline-block py-5 px-5 flex flex-row items-center justify-between flex-wrap space-x-4 ">
      <div className="w-full block lg:w-auto text-3xl tracking-wider ">
          <a href="#" class="mr-3 p-3 rounded-lg hover:text-green-400">
            Home
          </a>
          <a href="#" class="mr-3 p-3 rounded-lg hover:text-green-400">
            About
          </a>
          <a href="#" class="mr-3 p-3 rounded-lg hover:text-green-400">
            Articles
          </a>
        </div>
       <div class= "flex flex-row mt-4 lg:mt-0 mr-0">
          
          <Login/>
          <WiDaySunny size = "45" className = "cursor-pointer"/>
      </div>


  
    </nav>
  );
};

export default bar;
