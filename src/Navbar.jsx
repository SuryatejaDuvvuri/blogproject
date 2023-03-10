import { WiDaySunny } from "react-icons/wi";
import {useState} from "react";
import Login from "./Login";

const bar = () => {
  return (
    <nav className="dark:text-white text-black py-5 px-5 flex flex-row items-center justify-between flex-wrap space-x-4 ">
      <div className="w-full block lg:w-auto text-3xl tracking-wider">
        <a
          href="https://suryatejaduvvuri.github.io/"
          className="mr-3 p-3 rounded-lg text-black hover:text-4xl duration-200 dark:(hover:text-green-400)"
        >
          Home
        </a>
        <a
          href="https://suryatejaduvvuri.github.io/About.html"
          className="mr-3 p-3 rounded-lg text-black hover:text-4xl duration-200 dark:(hover:text-green-400)"
        >
          About
        </a>
        <a href="#" className="mr-3 p-3 rounded-lg text-black hover:text-4xl duration-200 dark:(hover:text-green-400)">
          Articles
        </a>
      </div>
      <div class="flex flex-row mt-4 lg:mt-0 mr-0">
        <Login/>
        <WiDaySunny
          size="45"
          className="cursor-pointer hover:scale-125 duration-200 text-black"
        />
      </div>
    </nav>
  );
};

export default bar;
