import app from "./fireBaseConfig";
import "firebase/compat/firestore";
import { Link, Outlet } from "react-router-dom";
const db = app.firestore();
const posts = () => {
  return (
    <div className="bg-black">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Outlet />
      {/* <h2>🌇 Recent posts</h2>
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
