import React, { useState } from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
// import Posts from "./Posts";

function Home() {
  const [dark, isDark] = useState(false);
  
  function handleClick()
  {
    isDark(!dark);
  }

  return (
    // dark:bg-primary
    <>
    <div className= {dark ? `h-screen text-white bg-primary overflow-auto` : `h-screen text-white bg-light overflow-auto`} >
      <Navbar dark = {dark} isDark = {isDark}/>
      <Main />

      <Footer />
    </div>
    </>
  );
}

export default Home;
