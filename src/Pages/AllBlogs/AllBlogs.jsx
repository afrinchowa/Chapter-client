import { useLoaderData } from "react-router-dom";
import AllBlogsCard from "./AllBlogsCard";


const AllBlogs = () => {
    const blogs =useLoaderData();

    return (
     <div className="m-5">
        <h1 className="text-3xl text-center text-purple-800">AllBlogs</h1>
     <div className="grid md:grid-cols-2 lg:grid-cols-3">
     {
        blogs.map(blog => <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>)
      }
     </div>
     </div>
    );
};

export default AllBlogs;