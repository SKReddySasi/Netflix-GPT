import React from "react";

const Header = () => {
  return (
    <div className="absolute w-ful w-screen px-6 py-1 black z-20 flex justify-between items-center">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo img"
      />
      <button className="bg-[red] text-white px-4 py-1 text-xs font-semibold rounded h-8">Sign Out</button>
    </div>
  );
};

export default Header;
