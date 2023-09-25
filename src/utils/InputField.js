import React from "react";

const InputField = ({ inputRef, id, type, placeholder, autoComplete }) => {
  return (
    <input
      className="w-full p-3 my-2 rounded-md bg-[#333]"
      ref={inputRef}
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
};

export default InputField;
