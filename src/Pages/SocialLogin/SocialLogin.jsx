import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import {BsGithub} from 'react-icons/Bs';


const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  
const handlleSocialLogin = (media) =>{
media()
.then(res =>console.log(res))
.catch(err => console.log(err) )
}

  return (
    <>
      <div className="divider">Continue With</div>
      <div className=" ">
        <button onClick={() =>handlleSocialLogin(googleLogin)} className="btn btn-lg bg-white text-black btn-sm mb-5 ml-5">
        <FcGoogle /> Google
        </button>
        <button onClick={() =>handlleSocialLogin(googleLogin)} className="btn btn-lg bg-white text-black btn-sm mb-5 ml-5">
        <BsGithub /> GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
