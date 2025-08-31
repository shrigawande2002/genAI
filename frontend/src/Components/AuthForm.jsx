import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios';

const AuthForm = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
  const responseMessage = async (response) => {
    console.log(response);
    try {
      const userSignin = await axios.post(`${BASE_URL}/sign-up`, {
        credential: response.credential
      });
      console.log(userSignin.data);
    } catch (error) {
      console.error('Error signing in:', error);
    }
    // 
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="w-full max-w-sm p-6 pb-0 rounded-xl md:mt-16 ">
      <h1 className='text-white text-3xl font-semibold'>Login</h1>

      {/* Email */}
      <div className='flex flex-col gap-4 mt-6 w-full'>
        <input
          type="email"
          id="email"
          className='w-[30rem]  p-4 rounded-lg bg-[#1c1c28] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          placeholder='example@gmail.com'
        />
      </div>

      {/* Password */}
      <div className='flex flex-col gap-4 mt-4 w-full'>
        <input
          type="password"
          id="password"
          className='w-[30rem] p-4 rounded-lg bg-[#1c1c28] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          placeholder='Password'
        />
        <p className='text-white text-sm'>Forgot your password?</p>
      </div>

      {/* Login Button */}
      <button className="w-[30rem] mt-6 p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
        Log in
      </button>
 <p className='text-white text-sm mt-4 z-10 py-5' > Or Continue with </p>
      <div className=' rounded-md mt-0 w-[30rem] '>
        <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMessage}
        /></div>
    </div>
  )
}

export default AuthForm
