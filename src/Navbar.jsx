import { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import Login from "./Login";

export default function Bar(props) {
  const { dark, isDark } = props;
  // function handleClick()
  // {
  //   isDark(!dark);
  // }

  return (
    <>
      <nav className="mt-3 dark:text-white text-black py-5 px-5 flex flex-row items-center justify-between flex-wrap space-x-4 ">
        <div className="w-full block lg:w-auto text-3xl tracking-wider">
          <a
            href="https://suryatejaduvvuri.github.io/"
            className={
              dark
                ? `mr-3 p-3 rounded-lg text-white hover:text-4xl hover:text-green-400 duration-200`
                : `mr-3 p-3 rounded-lg text-black hover:text-4xl duration-200`
            }
          >
            Home
          </a>
          <a
            href="https://suryatejaduvvuri.github.io/About.html"
            className={
              dark
                ? `mr-3 p-3 rounded-lg text-white hover:text-4xl hover:text-green-400 duration-200`
                : `mr-3 p-3 rounded-lg text-black hover:text-4xl duration-200`
            }
          >
            About
          </a>
        </div>
        <div class="flex flex-row mt-4 lg:mt-0 mr-0">
          <Login dark={dark} />
          <WiDaySunny
            onClick={() => isDark(!dark)}
            size="45"
            className={
              dark
                ? `cursor-pointer hover:scale-125 duration-200 text-white`
                : `cursor-pointer hover:scale-125 duration-200 text-black`
            }
          />
        </div>


      </nav>
    </>
  );
}
