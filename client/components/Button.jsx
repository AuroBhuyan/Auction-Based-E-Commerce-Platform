import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-semibold text-white
        bg-gradient-to-r from-green-500 to-lime-400
        hover:from-green-600 hover:to-lime-500
        active:from-green-700 active:to-lime-600
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
