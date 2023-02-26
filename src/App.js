import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Login from "./Login";
// import Footer from "./Footer";

function App() {
  
  return (
    <div className ="h-screen text-white bg-primary overflow-auto">
        <Navbar/>
        <Main/>
        <Login/>
        {/* <Posts/>
        <Footer/> */}
    </div>
  );
}

export default App;
