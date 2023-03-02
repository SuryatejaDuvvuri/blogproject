import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Posts from "./Posts";

function Home() {
  return (
    <div className="h-screen text-white bg-primary overflow-auto">
      <Navbar />
      <Main />

      {/* <Footer/> */}
    </div>
  );
}

export default Home;
