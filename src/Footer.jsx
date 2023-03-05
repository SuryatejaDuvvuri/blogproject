import { FaMailBulk, FaTwitter, FaGithub } from "react-icons/fa";
const design = () => {
  return (
    <>
      <hr className="border-gray-700 m-auto w-3/4 text-center" />
      <footer className="my-6 py-3 border-gray-200 flex flex-row justify-between items-center shadow text-gray-400">
        <span className="text-lg mx-6">
          © 2023 Surya. All Rights Reserved.
          <span className="m-auto flex flex-wrap text-center">
            Happy Coding 😊
          </span>
        </span>

        <div className="flex flex-wrap items-center space-x-8 mx-6 ">
          <a href="#" className="hover:scale-125 duration-200 hover:text-gray-300">
            <FaMailBulk size="25" />
          </a>
          <a href="#" className="hover:scale-125 duration-200 hover:text-gray-300">
            <FaTwitter size="25" />
          </a>
          <a
            href="https://github.com/SuryatejaDuvvuri"
            className="hover:scale-125 duration-200 hover:text-gray-300">
            <FaGithub size="25" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default design;