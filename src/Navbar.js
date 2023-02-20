//text-gradient-to-r from-red-500 to-yellow-500
import { WiDaySunny } from "react-icons/wi";
const bar = () => {
  return (
    <nav className="inline-block py-5 px-5 flex flex-row items-center justify-between flex-wrap mx-auto ">
      <div className="w-full block lg:w-auto text-3xl tracking-wider">
        <a href="#" class="mr-8">
          Home
        </a>
        <a href="#" class="mr-8">
          About
        </a>
        <a href="#" class="mr-8">
          Articles
        </a>
      </div>

      <div class= "flex flex-row mt-4 lg:mt-0 mr-0">
          <div class="block px-4 py-2 text-lg border rounded border-white hover:border-transparent hover:bg-gradient-to-r from-red-500 to-yellow-500 mr-6 cursor-pointer">
            Login
          </div>
          <WiDaySunny size = "45"/>
      </div>
  
    </nav>
  );
};

export default bar;
