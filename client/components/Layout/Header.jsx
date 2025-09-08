import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth.jsx";
import { toast } from "react-toastify";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout Successfully");
  };

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
          {[
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <li key={link.name} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-1 relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-800 hover:text-green-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
              <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
            </li>
          ))}

          {/* Dashboard Link (for logged-in users) */}
          {auth?.user && (
            <li className="relative group">
              <NavLink
                to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                className={({ isActive }) =>
                  `px-2 py-1 relative z-10 transition-colors duration-300 ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-800 hover:text-green-600"
                  }`
                }
              >
                Dashboard
              </NavLink>
              <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
            </li>
          )}

          {/* Auth Links (Conditionally Rendered) */}
          {!auth?.user ? (
            <>
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
            </>
          ) : (
            <>
              <li className="relative group">
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 text-gray-800 hover:text-red-600 transition-colors duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
