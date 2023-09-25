import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="body img"
        />
        <div className="absolute z-10 opacity-50 top-0 bg-black w-full min-h-screen"></div>
      </div>
      <form className="absolute p-14 w-[30%] my-24 m-auto right-0 left-0 bg-black text-white z-20 rounded-lg bg-opacity-70">
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full p-3 my-2 rounded-md bg-[#333]"
            id="Name"
            type="text"
            placeholder="Enter Full Name"
            autoComplete="off"
          />
        )}
        <input
          className="w-full p-3 my-2 rounded-md bg-[#333]"
          id="Email"
          type="text"
          placeholder="Email or phone number"
          autoComplete="off"
        />
        <input
          className="w-full p-3 my-2 rounded-md bg-[#333]"
          id="password"
          type="password"
          placeholder="Password"
        />
        {isSignInForm ? (
          <button className="w-full p-3 my-6 bg-[#e50914] rounded-md">
            Sign In
          </button>
        ) : (
          <button className="w-full p-3 my-6 bg-[#e50914] rounded-md">
            Sign Up
          </button>
        )}

        <p className="text-[#737373]">
          {isSignInForm ? "New to Neflix?" : "Already have an Account"}

          <button
            type="submit"
            className="text-white font-light cursor-pointer px-2"
            onClick={handleSignInForm}
          >
            {isSignInForm ? "Sign up now" : " Sign In now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
