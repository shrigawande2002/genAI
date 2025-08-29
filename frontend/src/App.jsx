import { useState } from 'react'
import {GoogleLogin} from '@react-oauth/google'
import axios from 'axios';
import BackgroundImage from './assets/loginBG.png'

function App() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
   const responseMessage = async(response) => {
        console.log(response);
        try{
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
    <div className="flex  w-full h-screen">
      <div className='absolute inset-0'>
        <img src={BackgroundImage} alt="" className="w-full h-full object-cover" />
      </div>
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
      />
    </div>
  )
}

export default App
