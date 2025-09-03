import React from 'react'

const NavBar = () => {
  return (
      <div className='flex justify-between items-center p-4 bg-gray-900 text-white sticky top-0 z-50'>
          <h1 className='text-2xl font-bold '>PixelMind</h1>

          <div>
              <button className=' p-2 flex gap-2 items-center justify-center text-lg rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition'>
                  Explore Feed
              </button>
          </div>

    </div>
  )
}

export default NavBar