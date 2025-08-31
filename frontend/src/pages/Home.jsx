import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const Home = () => {
    return (
        <div >
             <div className='flex justify-end items-center gap-4 p-4 md:p-10'>
                    <p className='text-white'> logout </p>
                    <p className='w-5 h-5 bg-white rounded-full'> </p>
                </div>
            <div className='md:p-20'>

                <h1 className='text-6xl font-semibold leading-tight text-white'> AI Image <br />
                    Generation</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-white'>


                    <div className='bg-[#101a2e] rounded-xl'>
                        <p className='flex items-center gap-4 p-8 py-16 rounded-md'> <span> <FaPlus size={25} /> </span> <span className='text-3xl font-semibold'> Generate img</span></p>
                    </div>
                    <div className='bg-[#101a2e] rounded-xl'>
                        <p className='flex items-center gap-4 p-8 py-16 rounded-md'> <span> <IoGrid size={25} /> </span> <span className='text-3xl font-semibold'> Explore Feed</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home