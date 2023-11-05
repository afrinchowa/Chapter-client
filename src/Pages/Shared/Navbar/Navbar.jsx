import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/addBlog">Add Blog</Link></li>
      <li><Link to="/allBlogs">All Blogs</Link></li>
      <li><Link to="/featuredBlogs">Featured Blogs</Link></li>
      <li><Link to="/wishList">WishList</Link></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {" "}
            {navItems}
          </ul>
        </div>
        <Link to="/" className=" flex normal-case text-xl">
          <img
            className="w-20 h-20"
            src="https://i.ibb.co/QNH20N6/pngtree-cool-red-wings-logo-png-image-7129340.png"
            alt=""
          />
          <h1 className="font-extrabold mt-6 text-3xl "> CHAPTER</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-primary">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
