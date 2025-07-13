import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{post?.title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{post?.content}</p>

      <div className="flex justify-end space-x-4 mt-4">
        <a
          href={`/edit/${id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit Post
        </a>
      </div>
    </div>
  );
};

export default PostDetails; // ✅ This is the important part


