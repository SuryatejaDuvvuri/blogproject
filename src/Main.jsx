import { GiSandsOfTime } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import { useState, useEffect, React } from "react";
import { client } from "./client";
import Posts from "./Posts";
import { Link } from "react-router-dom";
import { format } from "prettier";

const Titles = (props) => {
  const { dark, isDark } = props;
  const [post, setPost] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          timeToRead,
          publishedAt,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  const postLength = post.length;

  return (
    <div className="flex flex-col justify-center items-center prose-xl mb-7">
      <h1
        className={
          dark
            ? `font-extrabold mt-3 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500`
            : `font-extrabold mt-3 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth`
        }
      >
        Articles
      </h1>
      <p
        className={
          dark
            ? `text-gray-300 font-semibold tracking-wide`
            : `text-gray-700 font-semibold tracking-wide`
        }
      >
        A place to hear insights and other interesting things!
      </p>
      <h2
        className={
          dark
            ? `font-thick prose-xl text-gray-300`
            : `font-thick prose-xl text-gray-600`
        }
      >
        🌇 Recent posts
      </h2>
      {postLength > 0 ? (
        <div className="grid grid-cols-2 gap-15 justify-center items-center mb-5 mt-5">
          {post.map((blogPost) => (
            <Link to={`/posts/${blogPost.slug.current}`}>
              <section
                key={blogPost.slug.current}
                className={
                  dark
                    ? `group block border-sky-500 rounded-xl items-center justify-center space-y-2 max-h-lg max-w-lg p-6 border-double border-8 shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
                    : `group block rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-black shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
                }
              >
                <img
                  src={blogPost.mainImage.asset.url}
                  alt="sunset"
                  className="object-fill w-screen h-4/6"
                />
                <div className="group flex">
                  <div
                    className={
                      dark
                        ? `inline-block rounded-md px-3 mr-6`
                        : `bg-black inline-block rounded-md px-3 py-1 mr-6`
                    }
                  >
                    <div
                      className={
                        dark
                          ? `font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500`
                          : `font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lightFourth `
                      }
                    >
                      NEW!
                    </div>
                  </div>

                  <span>
                    {" "}
                    <BsNewspaper
                      size="38"
                      className={
                        dark
                          ? `text-white inline-block pl-1.5`
                          : `text-black inline-block  pl-1.5`
                      }
                    />
                  </span>
                  <h5
                    className={
                      dark
                        ? `font-sans px-3 py-1 mr-2 text-white text-opacity-60`
                        : `font-sans px-3 py-1 mr-2 text-black text-opacity-60`
                    }
                  >
                    Articles
                  </h5>

                  {/* <p className={
                  dark
                    ? `px-1.5 py-1 mr-3 text-white text-opacity-60`
                    : `px-1.5 py-1 mr-3 text-black text-opacity-60`}>
                {new Date(blogPost.publishedAt).toDateString()}
              </p> */}

                  <h5
                    className={
                      dark
                        ? `px-3 py-1 mr-2 text-white text-opacity-60`
                        : `px-3 py-1 mr-2 text-black text-opacity-60`
                    }
                  >
                    <span>
                      <GiSandsOfTime
                        size="38"
                        className={
                          dark
                            ? `text-white inline-block pl-1.5`
                            : `text-black inline-block pl-1.5`
                        }
                      />
                    </span>
                    {blogPost.timeToRead != null
                      ? `${blogPost.timeToRead} min read`
                      : "2 min read"}
                  </h5>
                </div>
                <h1
                  className={
                    dark
                      ? `mb-2 mt-10 text-3xl font-bold text-blue-200 tracking-tight`
                      : `mb-2 mt-10 text-3xl font-bold text-black tracking-tight`
                  }
                >
                  {blogPost.title}
                </h1>
                <p
                  className={
                    dark
                      ? `mb-4 font-sans text-white`
                      : `mb-4 font-sans text-black`
                  }
                >
                  {`${blogPost.body[1].children[0].text.substring(0, 200)}...`}
                </p>
              </section>
            </Link>
          ))}
        </div>
      ) : (
        <h1
          className={
            dark
              ? `mt-3 mb-4 p-5 prose-xl font-thick text-gray-300`
              : `mt-3 mb-4 p-5 font-thick prose-xl text-gray-600`
          }
        >
          First Post in Progress⌛{" "}
        </h1>
      )}
    </div>
  );
};

export default Titles;
