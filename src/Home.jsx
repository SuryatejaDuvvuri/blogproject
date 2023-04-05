import { UseState } from 'react';
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
// import Posts from "./Posts";

function Home() {

  // const [theme, setTheme] = UseState(0);
  return (
    // dark:bg-primary
    <div className="h-screen text-white bg-light overflow-auto">
      <Navbar />
      <Main />

      <Footer />
    </div>
  );
}

export default Home;
