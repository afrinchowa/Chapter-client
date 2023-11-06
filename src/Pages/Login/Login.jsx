
import { Link } from 'react-router-dom';
import img from '../../assets/login.svg'
import SocialLogin from '../SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
const Login = () => {

const handleLogin = event =>{
  event.preventDefault();


      // get field values
      const email =event.target.email.value;
      const password =event.target.password.value;
  
      // validation
      if(password.length < 6){
  toast.error('Password must be at least 6 Charecters');
      }
  
      // creating a new user 
     signin(email,password)
      .then(res => console.log(res.user))
     .catch(error  => console.log(error))
}

const {signin} =useAuth();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">   
        <img src={img} alt="" />      
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-4xl text-center font-bold">Login </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name='password'
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
              
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='my-4 text-center'>New to CHAPTER?Please <Link className='text-purple-600 font-bold' to="/signUp">Sign Up</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
