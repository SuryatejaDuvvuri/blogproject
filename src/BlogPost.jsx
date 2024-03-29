import { useState, useEffect, React } from "react";
import { client } from "./client";
import app from "./fireBaseConfig";
import "firebase/compat/firestore";
import { BsNewspaper } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { Prism } from "@mantine/prism";
// import Refractor from 'react-refractor'
import { PortableText } from "@portabletext/react";
import urlBuilder from '@sanity/image-url'

import { Link, Outlet, useParams } from "react-router-dom";
import Footer from "./Footer";

export default function BlogPost(props) {
  const { dark } = props;
  const [blog, setBlog] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
          title,
          name,
          body,
          publishedAt,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }, "name": author->name, 
        } | order(publishedAt desc)`
      )
      .then((data) => {
        setBlog(data[0]);
      })
      .catch(console.error);
  }, [slug]);

const builder = urlBuilder(client);

function urlFor(source) {
  return builder.image(source)
}

  const components = {
    types: {
      code: ({ value }) => {

        return (
          <Prism
            withLineNumbers
            colorScheme={dark ? `dark` : `light`}
            language={value.language}
          >
            {value.code}
          </Prism>
        );
      },
      image: ({value}) => {
        // console.log(value.asset._ref.toString().lastIndexOf('-'));
        return (
          // <img src = {`https://cdn.sanity.io/images/50nsmgba/production/${value.asset._ref}`} alt = "image" width = "50%" height = "50%" />
          <img src = {urlFor(value.asset._ref).fit('max').url()} />
        )
      }
    },
  };

  return (
    <div
      className={
        dark
          ? `text-white bg-primary h-screen overflow-auto p-6 box-border`
          : `text-black bg-light h-screen  overflow-auto p-6 box-border`
      }
    >
      <ul className="flex text-2xl space-x-4 py-5 px-5 ">
        <li>
          <Link to="/">
            <BiArrowBack className="hover:scale-125 duration-200" size="35" />
          </Link>
        </li>
      </ul>

      {blog && (
        <article
          id="posts"
          className="m-6 relative w-16/32 flex flex-col items-center justify-center subpixel-antialiased"
        >
          {blog.mainImage && (
            <img
              src={blog.mainImage.asset.url}
              alt="first"
              className="object-fill rounded-xl w-1/2 h-1/2"
            />
          )}
          <h5 className="prose-lg flex m-2 p-2 flex-row font-bold font-opacity tracking-tight">
            {new Date(blog.publishedAt).toLocaleDateString()}
            <BsNewspaper size="30" className="pl-1.5 mr-2 ml-2" />
            10 min read
          </h5>
          <h2
            id="title"
            className="m-2 p-3 font-bold text-center text-4xl break-words overflow-hidden first-letter:text-transparent bg-clip-text bg-gradient-to-r (from-cyan-500 to-lightFourth) "
          >
            {blog.title}
          </h2>
          <h6 className="prose-xl font-light">By {blog.name}</h6>
          <div className="m-2 p-4 break-words box-border h-fit max-w-prose prose-lg leading-loose">
            {/* <p
            id="title"
            className="first-letter:font-bold first-letter:text-transparent bg-clip-text bg-gradient-to-r (from-cyan-500 to-lightFourth) "
          >
            
          </p> */}
            {/* <blockquote className="border-solid border-white-900 border-l">
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </blockquote> */}
            <p
              id="post"
              className="first-letter:text-red-400  first-letter:font-bold"
            >
              <PortableText
                value={blog.body}
                components={components}
              />
            </p>

            {/* <Prism
            withLineNumbers
            colorScheme={dark ? `dark` : `light`}
            language="cpp"
          >
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
          </Prism> */}
          </div>
        </article>
      )}

      {/* Comments */}
      <Footer dark={dark} />

      <Outlet />
    </div>
  );
}
