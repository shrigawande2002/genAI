import React from "react";
import { MdModeEdit } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const GenForm = () => {
    return (
        <div className=" flex items-center justify-center gap-12  bg-[#0f0f1a] min-h-screen text-white w-full ">
            {/* Left Form Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-36 h-full">
                <div className="w-full">
                    <div className="flex flex-col gap-6 w-full py-8">
                        <h1 className="text-3xl font-semibold">Generate Image with prompt</h1>
                        <p className="text-gray-400 text-sm">
                            Write your prompt according to the image you want to generate!
                        </p>
                    </div>
                    <form className="flex flex-col gap-6">
                        {/* Author Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="author" className="font-medium ">Author</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-lg bg-[#1c1c28] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Prompt Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="prompt" className="font-medium">Prompt</label>
                            <textarea
                                id="prompt"
                                rows={6}
                                placeholder="Write a prompt to generate image"
                                className="w-full p-4 rounded-lg bg-[#1c1c28] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                       </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="w-1/2 p-3 flex gap-2 items-center justify-center text-lg rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
                            >
                             <BsStars color="white" size={20} style={{rotate: '90deg'}}  /> Generate Image
                            </button>
                            <button
                                type="button"
                                className="w-1/2 p-3 items-center justify-center flex gap-2 rounded-lg bg-purple-900  text-gray-300 font-medium hover:bg-[#38384a] transition text-lg"
                            >
                              <MdModeEdit color="white" size={20}  />  Post Image
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full h-full">
                    {/* Right Preview Section */}
                    <div className="w-full min-h-[300px]  md:min-h-full border-2 border-dashed border-yellow-500/50 rounded-lg flex items-center justify-center text-gray-500 text-sm md:text-lg">
                        Write a prompt to generate image
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GenForm;
