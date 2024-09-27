import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { loggedIn } from './authslice';
import { IoLogoGithub } from "react-icons/io";
import googleIcon from "../../assets/google-logo.webp";
import { auth, googleProvider ,githubProvider} from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useLoaderData } from 'react-router-dom';


const Login = () => {
      const redirectTo=useLoaderData();
      const navigate=useNavigate()
      const dispatch=useDispatch()

        function proceed(){
          if(redirectTo){
            console.log("i run")
           return navigate(`${redirectTo}`)
          }
          else{
            navigate('/')
          }
        }
    
        const handleGoogleLogin = async () => {
          try {
            const result = await signInWithPopup(auth, googleProvider);
            // The signed-in user info
            const user = result.user;
            console.log("User Info:", user);
            alert(`Welcome ${user.displayName}!`);
            dispatch(loggedIn(user.displayName))
            proceed();
          } catch (error) {
            console.error("Error during Google Sign-In:", error);
            alert(error.message);
          }
        }
        const handleGithubLogin = async () => {
            try {
              const result = await signInWithPopup(auth, githubProvider);
              const user = result.user;
              console.log("User Info:", user);
              alert(`Welcome ${user.displayName || user.email}!`);
              dispatch(loggedIn(user.displayName))
              proceed();
            } catch (error) {
              console.error("Error during GitHub Sign-In:", error);
              alert(error.message);
            }
          };


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePassChange = (e) => setPassword(e.target.value);

    const handleRegularLogin=()=>{
      if(email && password){
        dispatch(loggedIn(email));
        proceed();
      }
      else{
        alert('Please fill details.')
      }
    }
    const inputStyle = 'rounded p-3 lg:p-[0.9rem] bg-[rgba(39,40,53,255)] bg-opacity-75 text-gray-400 text-[16px] lg:text-sm placeholder-gray-400 placeholder-opacity-15 w-full';

    return (
        <div className='flex flex-col h-[80vh] w-full justify-evenly lg:p-[0.8rem]'>
            <div>
              <h1 className={"text-gray-300 text-center text-3xl  lg:text-3xl tracking-widest"}>Login to Account</h1>
              {redirectTo && <h5 className='text-red-500 text-center  text-[13px] mt-5 lg:text-xl lg:mt-4'>You must sign in for this feature!</h5>}
            </div>
            <div className='flex flex-col justify-evenly  lg:h-[75%]  lg:py-1  px-7 lg:px-0 lg:mx-auto lg:w-full max-w-md'>
                <form className='flex flex-col gap-2  w-full'>

                    <label htmlFor='email' className='text-xs text-detailColor'>Email</label>
                    <input name="email" id="email" required type="email" value={email}  onChange={handleEmailChange} placeholder='johndoe@email.com' className={inputStyle} />
                    <label htmlFor='password' className='text-xs text-detailColor'>Password</label>
                    <input name="password" id="password" required type="password" value={password} onChange={handlePassChange} placeholder='password' className={inputStyle} />

                </form>


            </div>
            <div className='flex flex-col items-between lg:w-[50%] max-w-md lg:mx-auto px-7 lg:px-0'>
 
 <button  className='w-full bg-indigo-600 text-gray-300 border-none rounded py-2  flex items-center justify-center  cursor-pointer hover:brightness-90 lg:text-2xl text-base lg:tracking-widest lg:mx-auto ' type="submit" onClick={handleRegularLogin}>
   Login
 </button>
        <div className='flex w-full items-center justify-between gap-2 text-detailColor my-6'>
        <hr className="border-detailColor opacity-10  w-[70%]" />
            <span className='text-[10px]'>or</span>
        <hr className="border-detailColor opacity-10 w-[70%]" />
        </div>
        <div>
            <button  className='w-full bg-[rgba(39,40,53,255)] bg-opacity-75 text-gray-400 border-none rounded py-2  flex items-center justify-center  cursor-pointer hover:brightness-90 lg:text-2xl text-base  lg:mx-auto mb-2' type="submit" onClick={handleGoogleLogin}>
            <img src={googleIcon} className='w-6 mr-2'/>
               Sign in with Google
             </button>
             <button  className='w-full bg-[rgba(39,40,53,255)] bg-opacity-75 text-gray-400  border-none rounded py-2  flex items-center justify-center  cursor-pointer hover:brightness-90 lg:text-2xl text-base  lg:mx-auto ' type="submit" onClick={handleGithubLogin}>
                <IoLogoGithub className='mr-2 text-xl' />
               Sign in with Github
             </button>
        </div>
        

 </div>
        </div>
    )
}

export default Login