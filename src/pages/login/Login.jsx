import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Login = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert('登入成功')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className="m-5 p-5">
      <button className="bg-primary px-4 text-white" onClick={handleLogin}>
        登入
      </button>
    </div>
  )
}

export default Login