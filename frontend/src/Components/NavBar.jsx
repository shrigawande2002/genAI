import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="flex justify-between items-center p-4 px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold">PixelMind</h1>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <button className="px-4 py-2 flex gap-2 items-center justify-center text-lg rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
            Explore Feed
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-gray-800 px-6 py-4">
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition">
            Explore Feed
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
