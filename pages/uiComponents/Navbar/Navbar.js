// Navbar.js

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-semibold ">My App</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.75a.75.75 0 01.75-.75h15.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.28 5.28a1 1 0 011.41 0L12 10.34l6.31-5.06a1 1 0 111.28 1.54l-7 5.6a1.11 1.11 0 01-.36.24V19a1 1 0 11-2 0V11.72a1 1 0 01-.36-.24l-7-5.6a1 1 0 010-1.54z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <ul
        className={`md:flex mt-4 ${isOpen ? 'block' : 'hidden md:block'}`}
      >
        <li className="md:mt-0 mt-2 md:ml-4">
          <a
            href="#"
            className="block text-white hover:text-gray-300"
          >
            Home
          </a>
        </li>
        <li className="md:mt-0 mt-2 md:ml-4">
          <a
            href="#"
            className="block text-white hover:text-gray-300"
          >
            About
          </a>
        </li>
        <li className="md:mt-0 mt-2 md:ml-4">
          <a
            href="#"
            className="block text-white hover:text-gray-300"
          >
            Services
          </a>
        </li>
        <li className="md:mt-0 mt-2 md:ml-4">
          <a
            href="#"
            className="block text-white hover:text-gray-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
