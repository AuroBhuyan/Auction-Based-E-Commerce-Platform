import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent h-14 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold text-lime-400">
          Auctify
        </NavLink>

        {/* Hamburger for small screens */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center gap-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-14 md:top-auto px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {/* Main Links */}
          <li className="relative group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-2 py-1 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              About
            </NavLink>
            <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </li>

          <li className="relative group">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-2 py-1 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              Services
            </NavLink>
            <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </li>

          <li className="relative group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2 py-1 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              Contact
            </NavLink>
            <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </li>

          {/* Auth Links */}
          <li className="relative group">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-2 py-1 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              Login
            </NavLink>
            <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </li>

          <li className="relative group">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `px-2 py-1 relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              Register
            </NavLink>
            <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
