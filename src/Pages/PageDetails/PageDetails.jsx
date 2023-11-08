import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const PageDetails = () => {
  const blog = useLoaderData();
  const {
    _id,
    title,
    photoUrl,
    shortDescription,
    longDescription,
    category,
    date,
  } = blog;

  const [comment, setComment] = useState("");
  const [comments,setComments] = useState([]);
const onClickHandler = () =>{
setComments((comments) => [...comments,comment]);
}

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  return (
    <div>
      <div className="card max-w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="Photos" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-purple-800">{title}</h2>
          <p>Short Description:{shortDescription}</p>
          <p>Long Description:{longDescription}</p>
          <h3 className="text-xl font-semibold text-purple-600">{category}</h3>
          <h2 className="text-xl">Posted date:{date}</h2>
          <div className="card-actions">
            <Link to={`updateBlogs/${_id}`}>
              <button className="btn bg-purple-400">Update</button>
            </Link>
            <button className="btn bg-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
  <h1 className="text-2xl font-extrabold mt-5 text-red-600 text-center">N.B: Can not comment on own blog</h1>
</div>
      <div className="main-container h-[100vh] flex flex-col justify-end items-center mt-[-200px]">

{comments.map((text)=>(
 <div className="h-20 w-96 bg-purple-100 border-solid mt-10 break-all">
 {text}
</div>
))}

       

        <div className="flex flex-col items-start  ">
          <h3 className="text-xl mb-4 text-purple-700 font-bold">Comment</h3>
          <textarea
            value={comment}
            onChange={onChangeHandler} placeholder="Your Comment"
            className="bg-purple-200 h-20 w-96"
            name=""
            id=""
          ></textarea>
          <button onClick={onClickHandler} className="btn bg-purple-400 mt-4">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
