import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

//    google login
const googleLogin = () => {
  return signInWithPopup(auth, googleProvider)
}


const user='chowa'



const authentications ={
    googleLogin,
    user
}


    return (
      <AuthContext.Provider value={authentications}>

{children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;