import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const design = () => {
  return (
    <>
      <hr className="mt-4 border-gray-700 m-auto w-3/4 text-center" />
      <footer className="m-6 border-gray-200 flex flex-row justify-between items-center text-gray-800 dark:text-gray-500">
        <span className="text-lg mx-6">
          © 2023 Surya. All Rights Reserved.
          <span className="m-auto flex flex-wrap text-center">
            Happy Coding 😊
          </span>
        </span>

        <div className="flex flex-wrap items-center space-x-8 mx-6 ">
          <a
            href="#"
            className=" hover:scale-150 duration-200 text-gray-400 hover:text-gray-600 dark:(hover:text-gray-800)"
          >
            <FaLinkedin size="25" />
          </a>
          <a
            href="#"
            className="hover:scale-150 duration-200 text-gray-400 hover:text-gray-600 dark:(hover:text-gray-300)"
          >
            <FaTwitter size="25" />
          </a>
          <a
            href="https://github.com/SuryatejaDuvvuri"
            className="hover:scale-150 duration-200 text-gray-400 hover:text-gray-600"
          >
            <FaGithub size="25" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default design;
