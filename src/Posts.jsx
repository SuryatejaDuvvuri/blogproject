import app from "./fireBaseConfig";
import "firebase/compat/firestore";
import {BsNewspaper} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";
import { Prism } from '@mantine/prism';
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
const db = app.firestore();

const posts = () => {
  return (
    <div className="h-screen text-white bg-primary overflow-auto p-6 box-border ">
      <ul className = "flex text-2xl space-x-4 py-5 px-5 ">
        <li>
          <Link to="/"><BiArrowBack className = "hover:scale-125 duration-200" size = "35"/></Link>
        </li>
      </ul>


      <article className = "m-6 relative w-16/32 flex flex-col items-center justify-center subpixel-antialiased">
          <img src = "https://global-uploads.webflow.com/5eec789d24d891b6d1d15438/5f2051f6f89ec95914892138_b01-RSM-Design_UC-Riverside_Education-Signage-Design.jpg" alt="first"
      className = "object-fill rounded-xl w-1/2 h-1/2"/>
        <h5 className = "prose-lg flex m-2 p-2 flex-row font-bold font-opacity tracking-tight">April 7th, 2023<BsNewspaper size="30" className="pl-1.5 mr-2 ml-2" />10 min read</h5>
        <h2 className = "m-2 p-3 first-letter:text-red-400 font-bold text-center text-4xl break-words overflow-hidden">Search trees with cheese: 
        What Computer Science tells us</h2>
        <h6 className = "prose-xl font-light">by Suryateja Duvvuri</h6>
          <div className = "m-2 p-4 break-words box-border h-fit max-w-prose prose-lg leading-loose">
            <p className = "first-letter:text-red-400  first-letter:font-bold">
             The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
            </p>
            <blockquote className = "border-solid border-white-900 border-l">
              But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
              springing up around the country.
            </blockquote>
            <h1 className = "font-bold">🎬 What is Binary Search Tree?</h1>
            <p className = "first-letter:text-red-400  first-letter:font-bold">
             The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
            </p>
            <Prism withLineNumbers colorScheme = "dark" language = "cpp">
              {`#include "PrintJob.h"

PrintJob::PrintJob ( int setP, int setJ, int numP ):priority(setP), jobNumber(setJ), numPages(numP){}
int PrintJob::getPriority ( ){
    return priority;
}

int PrintJob::getJobNumber ( ){
    return jobNumber;
}

int PrintJob::getPages ( ){
  return numPages;
}`}
            </Prism>

            <h2>What else?</h2>
            <p>You can display numbers like this</p>
            <ul className = "list-decimal">
              <li>do</li>
              <li className = "hover:text-teal-400"><a href = "https://www.google.com">Hover this</a></li>
            </ul>
              <p>And tables like this</p>
            <table className = "w-full table-auto rounded-lg text-gray-400">
              <thead className = "bg-gray-700 border-b">
                <tr>
                  <th scope="col" class="px-6 py-3 border-r">Head1</th>
                  <th scope="col" class="px-6 py-3 border-r">Head1</th>
                  <th scope="col" class="px-6 py-3">Head1</th>

                </tr>
              </thead>

              <tbody>
                <tr className = " border-gray-500 bg-gray-800 border-b">
                  <th scope="col" className="px-6 py-3 border-r">⛏️ Hello</th>
                  <th scope="col" className="px-6 py-3 border-r">🧠Hello</th>
                  <th scope="col" class="px-6 py-3 ">Hello</th>

                </tr>
                <tr className = " border-gray-500 bg-gray-800">
                  <th scope="col" className="px-6 py-3 border-r">😨Hello</th>
                  <th scope="col" className="px-6 py-3 border-r">🌏Hello</th>
                  <th scope="col" class="px-6 py-3 ">Hello</th>

                </tr>
              </tbody>

            </table>
          </div>

      
      </article>

      {/* Comments */}
    <Footer/> 
     

      <Outlet />
      {/* 
      <div className="posts">
        <div className="firstPost">
          <img src="" alt="first" />
          <div className="texts">
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default posts;
