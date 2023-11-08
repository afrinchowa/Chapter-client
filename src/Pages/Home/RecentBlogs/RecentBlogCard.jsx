import { Link } from "react-router-dom";

const RecentBlogCard = ({ blog }) => {
  const {_id, title, photoUrl, shortDescription, category } = blog;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photoUrl} alt="Photo" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-purple-800">{title}</h2>
        <p>{shortDescription}</p>
        <h3 className="text-xl font-semibold text-purple-600">{category}</h3>
        <div className="card-actions">
        <Link to={`/pageDetails/${_id}`}>
        <button className="btn bg-purple-400">Details</button></Link>
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
  );
};

export default RecentBlogCard;
