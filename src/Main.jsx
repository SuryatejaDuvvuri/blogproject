import { GiSandsOfTime } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const titles = () => {
  return (
    <div class="flex flex-col justify-center items-center prose-xl mb-7">
      {/* dark: from-red-500 to-yellow-500 */}
      <h1 class="font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth ">
        Articles
      </h1>
      {/* dark:text-gray-300  */}
      <p className = "text-gray-700 font-semibold tracking-wide">A place to hear insights and other interesting things!</p>
      {/* dark:text-gray-300 */}
      <h2 className = "font-thin prose-xl text-gray-600  ">🌇 Recent posts</h2>
      <div className="flex flex-row gap-30 justify-center items-center mt-4">
        <Link to="/Posts" className="hover:cursor-pointer">
        {/* dark:border-sky-500 rounded-xl  */}
          <section className="group inline-block rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-black shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
            {/* dark:(from-red-500 to-yellow-500) */}
              <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth rounded-md px-3 py-1 mr-6 ">
                NEW!
              </div>
              {/* dark:text-white */}
              <BsNewspaper size="38" className="text-black  pl-1.5" />
              <div className="font-sans px-3 py-1 mr-4 text-black text-opacity-60">
                Articles
              </div>
              <time className="px-1.5 py-1 mr-3 text-black text-opacity-60">
                April 7, 2023
              </time>

              <GiSandsOfTime size="38" className="text-black pl-1.5" />
              <div className="px-3 py-1 mr-3 text-black text-opacity-60 mb-7">
                10 min read
              </div>
            </div>
            {/* dark:text-blue-200  */}
            <h1 className="mb-2 text-3xl font-bold text-black tracking-tight">
              First blog
            </h1>
            {/* dark:text-white */}
            <p className="mb-4 font-sans text-black ">
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>

        <Link to="/Posts" className="hover:cursor-pointer">
        {/* dark:border-sky-500 rounded-xl  */}
          <section className="group inline-block items-center justify-center space-y-2 rounded-xl max-h-lg max-w-md p-3 border-double border-8 border-black shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
            {/* dark:(from-red-500 to-yellow-500) */}
              <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth rounded-md px-3 py-1 mr-6 ">
                NEW!
              </div>
              {/* dark:text-white */}
              <BsNewspaper size="38" className="text-black  pl-1.5" />
              <div className="font-sans px-3 py-1 mr-4 text-black text-opacity-60">
                Articles
              </div>
              <time className="px-1.5 py-1 mr-3 text-black text-opacity-60">
                April 7, 2023
              </time>

              <GiSandsOfTime size="38" className="text-black pl-1.5" />
              <div className="px-3 py-1 mr-3 text-black text-opacity-60 mb-7">
                10 min read
              </div>
            </div>
            {/* dark:text-blue-200  */}
            <h1 className="mb-2 text-3xl font-bold text-black tracking-tight">
              First blog
            </h1>
            {/* dark:text-white */}
            <p className="mb-4 font-sans text-black ">
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>
      </div>
      <div class="flex flex-row gap-30 justify-center items-center mt-4">
      <Link to="/Posts" className="hover:cursor-pointer">
        {/* dark:border-sky-500 rounded-xl  */}
          <section className="group inline-block items-center justify-center space-y-2 rounded-xl max-h-lg max-w-md p-3 border-double border-8 border-black shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
            {/* dark:(from-red-500 to-yellow-500) */}
              <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth rounded-md px-3 py-1 mr-6 ">
                NEW!
              </div>
              {/* dark:text-white */}
              <BsNewspaper size="38" className="text-black  pl-1.5" />
              <div className="font-sans px-3 py-1 mr-4 text-black text-opacity-60">
                Articles
              </div>
              <time className="px-1.5 py-1 mr-3 text-black text-opacity-60">
                April 7, 2023
              </time>

              <GiSandsOfTime size="38" className="text-black pl-1.5" />
              <div className="px-3 py-1 mr-3 text-black text-opacity-60 mb-7">
                10 min read
              </div>
            </div>
            {/* dark:text-blue-200  */}
            <h1 className="mb-2 text-3xl font-bold text-black tracking-tight">
              First blog
            </h1>
            {/* dark:text-white */}
            <p className="mb-4 font-sans text-black ">
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>
        <Link to="/Posts" className="hover:cursor-pointer">
        {/* dark:border-sky-500 rounded-xl  */}
          <section className="group inline-block items-center justify-center space-y-2 rounded-xl max-h-lg max-w-md p-3 border-double border-8 border-black shadow-md shadow-emerald-100 mr-7 hover:scale-110 duration-300">
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow ">
            {/* dark:(from-red-500 to-yellow-500) */}
              <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth rounded-md px-3 py-1 mr-6 ">
                NEW!
              </div>
              {/* dark:text-white */}
              <BsNewspaper size="38" className="text-black  pl-1.5" />
              <div className="font-sans px-3 py-1 mr-4 text-black text-opacity-60">
                Articles
              </div>
              <time className="px-1.5 py-1 mr-3 text-black text-opacity-60">
                April 7, 2023
              </time>

              <GiSandsOfTime size="38" className="text-black pl-1.5" />
              <div className="px-3 py-1 mr-3 text-black text-opacity-60 mb-7">
                10 min read
              </div>
            </div>
            {/* dark:text-blue-200  */}
            <h1 className="mb-2 text-3xl font-bold text-black tracking-tight">
              First blog
            </h1>
            {/* dark:text-white */}
            <p className="mb-4 font-sans text-black ">
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default titles;
