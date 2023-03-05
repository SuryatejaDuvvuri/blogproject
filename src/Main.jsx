import { GiSandsOfTime } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const titles = () => {
  return (
    <div class="flex flex-col justify-center items-center prose-xl mb-7">
      <h1 class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        Articles
      </h1>
      <p className = "text-gray-300 font-semibold tracking-wide">A place to hear insights and other interesting things!</p>
      <h2 className = "font-thin prose-xl text-gray-300 ">🌇 Recent posts</h2>
      <div className="flex flex-row gap-30 justify-center items-center mt-4">
        <Link to="/Posts" className="hover:cursor-pointer">
          <section className="group inline-block items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-sky-500 rounded-xl shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
              <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 bg-black rounded-md px-3 py-1 mr-6 ">
                NEW!
              </div>
              <BsNewspaper size="38" className="pl-1.5" />
              <div className="font-sans px-3 py-1 mr-4 text-white text-opacity-60">
                Articles
              </div>
              <time className="px-1.5 py-1 mr-3 text-white text-opacity-60">
                April 7, 2023
              </time>

              <GiSandsOfTime size="38" className="pl-1.5" />
              <div className="px-3 py-1 mr-3 text-white text-opacity-60 mb-7">
                10 min read
              </div>
            </div>

            <h1 className="mb-2 text-3xl font-bold text-blue-200 tracking-tight">
              First blog
            </h1>

            <p className="mb-4 font-sans">
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>

        <section className="group inline-block items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-sky-500 rounded-xl shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
          <img
            src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
            alt="sunset"
            className="object-fill w-screen"
          />
          <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
            <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 bg-black rounded-md px-3 py-1 mr-6 ">
              NEW!
            </div>
            <BsNewspaper size="38" className="pl-1.5" />
            <div className="font-sans px-3 py-1 mr-4 text-white text-opacity-60">
              Articles
            </div>
            <time className="px-1.5 py-1 mr-3 text-white text-opacity-60">
              April 7, 2023
            </time>

            <GiSandsOfTime size="38" className="pl-1.5" />
            <div className="px-3 py-1 mr-3 text-white text-opacity-60 mb-7">
              10 min read
            </div>
          </div>

          <a href="#">
            <h1 class="mb-2 text-3xl font-bold text-blue-200 tracking-tight">
              First blog
            </h1>
          </a>
          <p class="mb-4 font-sans">
            This blog is a community that welcomes Fellows from a wide range of
            experiences and backgrounds. What perspective or experience will you
            bring to the fellowship to strengthen our community?
          </p>
        </section>
      </div>
      <div class="flex flex-row gap-30 justify-center items-center mt-4">
        <section className="group inline-block items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-sky-500 rounded-xl shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
          <img
            src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
            alt="sunset"
            className="object-fill w-screen"
          />
          <div class="group flex flex-row mt-5 flex-wrap flex-grow ">
            <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 bg-black rounded-md px-3 py-1 mr-6 ">
              NEW!
            </div>
            <BsNewspaper size="38" className="pl-1.5" />
            <div className="font-sans px-3 py-1 mr-4 text-white text-opacity-60">
              Articles
            </div>
            <time className="px-1.5 py-1 mr-3 text-white text-opacity-60">
              April 7, 2023
            </time>

            <GiSandsOfTime size="38" className="pl-1.5" />
            <div className="px-3 py-1 mr-3 text-white text-opacity-60 mb-7">
              10 min read
            </div>
          </div>

          <a href="#">
            <h1 className="mb-2 text-3xl font-bold text-blue-200 tracking-tight">
              First blog
            </h1>
          </a>
          <p className="mb-4 font-sans">
            This blog is a community that welcomes Fellows from a wide range of
            experiences and backgrounds. What perspective or experience will you
            bring to the fellowship to strengthen our community?
          </p>
        </section>
        <section className="group inline-block items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-sky-500 rounded-xl shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
          <img
            src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
            alt="sunset"
            className="object-fill w-screen"
          ></img>
          <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
            <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 bg-black rounded-md px-3 py-1 mr-6 ">
              NEW!
            </div>
            <BsNewspaper size="38" className="pl-1.5" />
            <div className="font-sans px-3 py-1 mr-4 text-white text-opacity-60">
              Articles
            </div>
            <time className="px-1.5 py-1 mr-3 text-white text-opacity-60">
              April 7, 2023
            </time>

            <GiSandsOfTime size="38" className="pl-1.5" />
            <div className="px-3 py-1 mr-3 text-white text-opacity-60 mb-7">
              10 min read
            </div>
          </div>

          <a href="#">
            <h1 className="mb-2 text-3xl font-bold text-blue-200 tracking-tight">
              First blog
            </h1>
          </a>
          <p className="mb-4 font-sans">
            This blog is a community that welcomes Fellows from a wide range of
            experiences and backgrounds. What perspective or experience will you
            bring to the fellowship to strengthen our community?
          </p>
        </section>
      </div>
    </div>
  );
};

export default titles;
