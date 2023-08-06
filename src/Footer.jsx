import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const design = (props) => {
  const { dark } = props;
  return (
    <div className = "absolute left-0 right-0 bottom-0">
      <hr className="mt-4 border-gray-700 m-auto w-3/4 text-center" />
      <footer
        className={
          dark
            ? `m-6 border-gray-200 flex flex-row justify-between items-center  text-gray-300`
            : `m-6 border-gray-200 flex flex-row justify-between items-center  text-gray-800 `
        }
      >
        <span className="text-lg mx-6">
          © 2023 Surya. All Rights Reserved.
          <span className="m-auto flex flex-wrap text-center">
            Happy Coding 😊
          </span>
        </span>

        <div className="flex flex-wrap items-center space-x-8 mx-6 ">
          <a
            href="https://www.linkedin.com/in/suryateja-duvvuri-22b377162/"
            className={
              dark
                ? `hover:scale-150 duration-200 text-gray-400 hover:text-gray-300`
                : `hover:scale-150 duration-200 text-gray-400 hover:text-gray-600`
            }
          >
            <FaLinkedin size="25" />
          </a>
          <a
            href="https://twitter.com/SuryatejaDuvvu1"
            className={
              dark
                ? `hover:scale-150 duration-200 text-gray-400 hover:text-gray-300`
                : `hover:scale-150 duration-200 text-gray-400 hover:text-gray-600`
            }
          >
            <FaTwitter size="25" />
          </a>
          <a
            href="https://github.com/SuryatejaDuvvuri"
            className={
              dark
                ? `hover:scale-150 duration-200 text-gray-400 hover:text-gray-300`
                : `hover:scale-150 duration-200 text-gray-400 hover:text-gray-600`
            }
          >
            <FaGithub size="25" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default design;
