import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";
import PageDetails from "../Pages/PageDetails/PageDetails";
import UpdateBlogs from "../Pages/UpdateBlogs/UpdateBlogs";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import WishList from "../Pages/WishList/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/pageDetails/:id",
        element: <PageDetails></PageDetails>,
      },
    ],
  },
  {
    path: "/addBlog",
    element: <AddBlogs></AddBlogs>,
  },

  {
    path: "/allBlogs",
    element: <AllBlogs></AllBlogs>,
    loader: () => fetch("http://localhost:5000/blog"),
  },
  {
    path: "/allBlogs/updateBlogs/:id",
    element: <UpdateBlogs></UpdateBlogs>,
    loader:({params}) =>fetch(`http://localhost:5000/blog/${params.id}`)
  },
  {
    path: "/featuredBlogs",
    element: <FeaturedBlogs></FeaturedBlogs>,
  },
  {
    path: "/wishList",
    element: <WishList></WishList>,
  },
]);

export default router;
