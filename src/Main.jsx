import { GiSandsOfTime } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import {useState, useEffect, React} from "react"
import {client} from "./client";
import Posts from "./Posts";
import { Link } from "react-router-dom";


const Titles = (props) => {
  const { dark, isDark } = props;
  const [post, setPost] = useState([])

  useEffect(() => {
      client.fetch(
        `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      ).then((data)=> setPost(data)).catch(console.error)
    }, [])

  

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
      <div className="flex flex-row gap-30 justify-center items-center mt-4">
      {post[0] && <Link to = {`/posts/${post[0].slug.current}`}>
          <section
            className={
              dark
                ? `group inline-block border-sky-500 rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
                : `group inline-block rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-black shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
            }
          >
            <img
              src={post[0].mainImage.asset.url}
              alt="sunset"
              className="object-fill w-screen h-4/6"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow mr-6">
              <div
                className={
                  dark
                    ? `inline-block rounded-md px-3 py-1 mr-6`
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

              <BsNewspaper
                size="38"
                className={dark ? `text-white pl-1.5` : `text-black pl-1.5`}
              />
              <div
                className={
                  dark
                    ? `font-sans px-3 py-1 mr-4 text-white text-opacity-60`
                    : `font-sans px-3 py-1 mr-4 text-black text-opacity-60`
                }
              >
                Articles
              </div>
              <time
                className={
                  dark
                    ? `px-1.5 py-1 mr-3 text-white text-opacity-60`
                    : `px-1.5 py-1 mr-3 text-black text-opacity-60`
                }
              >
                April 7, 2023
              </time>

              <GiSandsOfTime
                size="38"
                className={dark ? `text-white mt-3.5` : `text-black mt-3.5`}
              />
              <div
                className={
                  dark
                    ? `px-3 py-1 mr-3 text-white text-opacity-60 mt-3.5`
                    : `px-3 py-1 mr-3 text-black text-opacity-60 mt-3.5`
                }
              >
                10 min read
              </div>
            </div>
            <h1
              className={
                dark
                  ? `mb-2 mt-7 text-3xl font-bold text-blue-200 tracking-tight`
                  : `mb-2 mt-7 text-3xl font-bold text-black tracking-tight`
              }
            >
              {post[0].title}
            </h1>
            <p
              className={
                dark ? `mb-4 font-sans text-white` : `mb-4 font-sans text-black`
              }
            >
             {`${post[0].body[2].children[0].text.substring(0,200)}...`}
            </p>
          </section>
        </Link>}

        <Link to="/Posts" className="hover:cursor-pointer">
          <section
            className={
              dark
                ? `group inline-block border-sky-500 rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
                : `group inline-block rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-black shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
            }
          >
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow mr-6">
              <div
                className={
                  dark
                    ? `inline-block rounded-md px-3 py-1 mr-6`
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

              <BsNewspaper
                size="38"
                className={dark ? `text-white pl-1.5` : `text-black pl-1.5`}
              />
              <div
                className={
                  dark
                    ? `font-sans px-3 py-1 mr-4 text-white text-opacity-60`
                    : `font-sans px-3 py-1 mr-4 text-black text-opacity-60`
                }
              >
                Articles
              </div>
              <time
                className={
                  dark
                    ? `px-1.5 py-1 mr-3 text-white text-opacity-60`
                    : `px-1.5 py-1 mr-3 text-black text-opacity-60`
                }
              >
                April 7, 2023
              </time>

              <GiSandsOfTime
                size="38"
                className={dark ? `text-white mt-3.5` : `text-black mt-3.5`}
              />
              <div
                className={
                  dark
                    ? `px-3 py-1 mr-3 text-white text-opacity-60 mt-3.5`
                    : `px-3 py-1 mr-3 text-black text-opacity-60 mt-3.5`
                }
              >
                10 min read
              </div>
            </div>
            <h1
              className={
                dark
                  ? `mb-2 mt-7 text-3xl font-bold text-blue-200 tracking-tight`
                  : `mb-2 mt-7 text-3xl font-bold text-black tracking-tight`
              }
            >
              First blog
            </h1>
            <p
              className={
                dark ? `mb-4 font-sans text-white` : `mb-4 font-sans text-black`
              }
            >
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>
      </div>
      <div class="flex flex-row gap-30 justify-center items-center mt-4">
        <Link to="/Posts" className="hover:cursor-pointer">
          <section
            className={
              dark
                ? `group inline-block border-sky-500 rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
                : `group inline-block rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-black shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
            }
          >
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow mr-6">
              <div
                className={
                  dark
                    ? `inline-block rounded-md px-3 py-1 mr-6`
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

              <BsNewspaper
                size="38"
                className={dark ? `text-white pl-1.5` : `text-black pl-1.5`}
              />
              <div
                className={
                  dark
                    ? `font-sans px-3 py-1 mr-4 text-white text-opacity-60`
                    : `font-sans px-3 py-1 mr-4 text-black text-opacity-60`
                }
              >
                Articles
              </div>
              <time
                className={
                  dark
                    ? `px-1.5 py-1 mr-3 text-white text-opacity-60`
                    : `px-1.5 py-1 mr-3 text-black text-opacity-60`
                }
              >
                April 7, 2023
              </time>

              <GiSandsOfTime
                size="38"
                className={dark ? `text-white mt-3.5` : `text-black mt-3.5`}
              />
              <div
                className={
                  dark
                    ? `px-3 py-1 mr-3 text-white text-opacity-60 mt-3.5`
                    : `px-3 py-1 mr-3 text-black text-opacity-60 mt-3.5`
                }
              >
                10 min read
              </div>
            </div>
            <h1
              className={
                dark
                  ? `mb-2 mt-7 text-3xl font-bold text-blue-200 tracking-tight`
                  : `mb-2 mt-7 text-3xl font-bold text-black tracking-tight`
              }
            >
              First blog
            </h1>
            <p
              className={
                dark ? `mb-4 font-sans text-white` : `mb-4 font-sans text-black`
              }
            >
              This blog is a community that welcomes Fellows from a wide range
              of experiences and backgrounds. What perspective or experience
              will you bring to the fellowship to strengthen our community?
            </p>
          </section>
        </Link>
        <Link to="/Posts" className="hover:cursor-pointer">
          <section
            className={
              dark
                ? `group inline-block border-sky-500 rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
                : `group inline-block rounded-xl items-center justify-center space-y-2 max-h-lg max-w-md p-3 border-double border-8 border-black shadow-sm shadow-emerald-50 mr-7 hover:scale-110 duration-300`
            }
          >
            <img
              src="https://s.hdnux.com/photos/01/23/46/62/21916843/7/rawImage.jpg"
              alt="sunset"
              className="object-fill w-screen"
            />
            <div className="group flex flex-row mt-5 flex-wrap flex-grow mr-6">
              <div
                className={
                  dark
                    ? `inline-block rounded-md px-3 py-1 mr-6`
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

              <BsNewspaper
                size="38"
                className={dark ? `text-white pl-1.5` : `text-black pl-1.5`}
              />
              <div
                className={
                  dark
                    ? `font-sans px-3 py-1 mr-4 text-white text-opacity-60`
                    : `font-sans px-3 py-1 mr-4 text-black text-opacity-60`
                }
              >
                Articles
              </div>
              <time
                className={
                  dark
                    ? `px-1.5 py-1 mr-3 text-white text-opacity-60`
                    : `px-1.5 py-1 mr-3 text-black text-opacity-60`
                }
              >
                April 7, 2023
              </time>

              <GiSandsOfTime
                size="38"
                className={dark ? `text-white mt-3.5` : `text-black mt-3.5`}
              />
              <div
                className={
                  dark
                    ? `px-3 py-1 mr-3 text-white text-opacity-60 mt-3.5`
                    : `px-3 py-1 mr-3 text-black text-opacity-60 mt-3.5`
                }
              >
                10 min read
              </div>
            </div>
            <h1
              className={
                dark
                  ? `mb-2 mt-7 text-3xl font-bold text-blue-200 tracking-tight`
                  : `mb-2 mt-7 text-3xl font-bold text-black tracking-tight`
              }
            >
              First blog
            </h1>
            <p
              className={
                dark ? `mb-4 font-sans text-white` : `mb-4 font-sans text-black`
              }
            >
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

export default Titles;
