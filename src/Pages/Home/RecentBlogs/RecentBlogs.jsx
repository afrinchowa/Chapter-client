import { useEffect, useState } from "react";
import RecentBlogCard from "./RecentBlogCard";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://chapter-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-4xl text-purple-800 font-bold">Our Recent Blogs</h3>
        <p className="mt-2">
          
          <br /> Our team of writers and contributors are constantly exploring
          exciting topics and sharing fresh perspectives to keep you informed
          and entertained. Check out our most recent blog posts:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        blogs.map(blog => <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard> )
       }
      </div>
    </div>
  );
};

export default RecentBlogs;
