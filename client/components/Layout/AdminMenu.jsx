// AdminMenu.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Create Category", path: "/dashboard/admin/create-category" },
    { name: "Create Product", path: "/dashboard/admin/create-product" },
    { name: "Users", path: "/dashboard/admin/users" },
  ];

  return (
    <div className="w-full md:w-64 bg-white shadow-md rounded-xl p-4">
      <div className="flex items-center justify-between md:block">
        <h2 className="text-xl font-bold text-lime-500 mb-4">Admin Panel</h2>

        {/* Hamburger for small screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
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
      </div>

      {/* Links */}
      <ul
        className={`flex flex-col gap-3 mt-4 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="relative group">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-800 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
            {/* hover background animation */}
            <span className="absolute inset-0 rounded-md bg-lime-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMenu;
