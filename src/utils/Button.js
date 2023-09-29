import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="w-full p-3 my-6 bg-[#e50914] rounded-lg text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
