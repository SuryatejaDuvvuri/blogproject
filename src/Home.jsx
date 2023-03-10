import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
// import Posts from "./Posts";

function Home() {


  return (
    // dark:bg-primary
    <div className="h-screen text-white bg-light  overflow-auto">
      <Navbar />
      <Main />

      <Footer />
    </div>
  );
}

export default Home;
