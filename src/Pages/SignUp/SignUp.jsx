import { Link } from "react-router-dom";
import img from "../../assets/login.svg";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const SignUp = () => {
  const handleSignup = (event) => {
    event.preventDefault();

    // get field values
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // validation
    // Check if the password contains at least one alphabet character (a-zA-Z)
    if (!/[a-zA-Z]/.test(password)) {
      return Swal.fire("password need at least 1 alphabet");
    }

    // Check if the password contains at least one symbol character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return Swal.fire("password need at least 1 symbol");
    }

    // // validation
    if(password.length < 6){
      return Swal.fire("Password must be at least 6 Charecters  ");
    }
    // // validation
    if(!/0-9/.test(password)){
      return Swal.fire("Password must be at least 1 neumeric number  ");
    }


    createUser(email, password)
      .then(() => {
        Swal.fire("successfully singUp");
      })
      .catch((error) => {
        Swal.fire(error.message);
      });
  };
  // creating a new user
  //   createUser(email,password)
  //   .then(res => console.log(res.user))
  //  .catch(error  => console.log(error))

  const { createUser } = useAuth();

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignup} className="card-body">
              <h1 className="text-4xl text-center font-bold text-purple-600">
                Register
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account to CHAPTER?Please{" "}
              <Link className="text-purple-600 font-bold" to="/login">
                Log In
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
