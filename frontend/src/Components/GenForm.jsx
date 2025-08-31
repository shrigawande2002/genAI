import React from 'react'

const GenForm = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-white'>Generate Image</h1>

            <form className='mt-8'>
                <textarea
                    type="text"
                    rows={6}
                    id="prompt"
                    className='w-[30rem] p-4 rounded-lg bg-[#1c1c28] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    placeholder='Enter prompt...'
                /><button className="w-[30rem] mt-6 p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
                    Generate
                </button>
            </form>
        </div>
    )
}

export default GenForm