
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
// import Posts from "./Posts";

function Home(props) {
  const {dark, isDark} = props;
  
  function handleClick()
  {
    localStorage.setItem('isDark', !dark);
  }

  return (
    <>
    <div className= {dark ? `h-screen text-white bg-primary overflow-auto` : `h-screen text-white bg-light overflow-auto`} >
      <Navbar dark = {dark} isDark = {isDark}/>
      <Main dark = {dark}/>
      <Footer dark = {dark}/>
    </div>
    </>
  );
}

export default Home;
