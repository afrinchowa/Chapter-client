import { useEffect, useState } from "react";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("recentBlogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-4xl text-purple-800 font-bold">Our Recent Blogs</h3>
        <p className="mt-2">
          Stay up to date with the latest insights and stories from CHAPTER.
          <br /> Our team of writers and contributors are constantly exploring
          exciting topics and sharing fresh perspectives to keep you informed
          and entertained. Check out our most recent blog posts:
        </p>
      </div>
      <div>
        <p>blogs{blogs.length}</p>
      </div>
    </div>
  );
};

export default RecentBlogs;
