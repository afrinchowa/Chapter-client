import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

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
        <button onClick={() =>handlleSocialLogin(googleLogin)} className="btn btn-neutral btn-sm">
         Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
