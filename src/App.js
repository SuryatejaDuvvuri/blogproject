import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Home from "./Home";
import BlogPost from "./BlogPost"
// import Footer from "./Footer";
import Posts from "./Posts";

function App() {
  const [dark, isDark] = useState(
    localStorage.getItem("isDark") === "true" ? true : false
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home dark={dark} isDark={isDark} />} />
        {/* <Route path="/posts" element={<Posts dark={dark} />} /> */}
        <Route path = "/posts/:slug" element = {<BlogPost dark = {dark}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
