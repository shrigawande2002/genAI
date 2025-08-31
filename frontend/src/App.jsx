import { useState } from 'react'

import BackgroundImage from './assets/loginBG.png'
import AuthForm from './Components/AuthForm';

function App() {


  return (
    <div className="grid grid-cols-1 w-screen h-screen md:px-32">
      <div className='absolute inset-0 '>
        <img src={BackgroundImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className='z-10 w-[30rem]'>
        <AuthForm />
      </div>
      
      
    </div>
  )
}

export default App
