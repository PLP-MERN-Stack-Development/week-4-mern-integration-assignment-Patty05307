import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet. <Link to="/create" className="text-blue-500 underline">Create one</Link>.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id} className="border-b pb-2">
              <Link to={`/posts/${post._id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 text-sm">{post.content.slice(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;


