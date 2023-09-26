import React, { useRef, useState } from "react";
import Header from "./Header";
import InputField from "../utils/InputField";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validate";
import Button from "../utils/Button";

import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [authError, setAuthError] = useState(null);

  // reference variables using useRef Hook
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = () => {
    const emailMessage = validateEmail(emailRef.current.value);
    setEmailErrorMessage(emailMessage);
    const passwordMessage = validatePassword(passwordRef.current.value);
    setPasswordErrorMessage(passwordMessage);

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User is valid");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + " -> " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed In User is Valid");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorCode + " --> " + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    // for Signup again am using signin Validations
    handleSignIn();
    const nameMessage = validateName(nameRef.current.value);
    setNameErrorMessage(nameMessage);

    // if (!isSignInForm) {
    //   // Sign Up Logic
    //   createUserWithEmailAndPassword(
    //     auth,
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   )
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setAuthError(errorCode + " -> " + errorMessage);
    //     });
    // } else {
    //   // Sign In Logic
    //   signInWithEmailAndPassword(
    //     auth,
    //     emailRef.current.value,
    //     passwordRef.current.value
    //   )
    //     .then((userCredential) => {
    //       // Signed in
    //       const user = userCredential.user;
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       setAuthError(errorCode + " --> " + errorMessage);
    //     });
    // }
  };

  const handleToggleForm = () => {
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

      {/* SignIn / SignUp Form Code */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-14 w-[30%] my-24 m-auto right-0 left-0 bg-black text-white z-20 rounded-lg bg-opacity-70"
      >
        <h1 className="text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>

        {/* Below Name Field is for SignUp Form */}
        {!isSignInForm && (
          <>
            <InputField
              inputRef={nameRef}
              id="Name"
              type="text"
              placeholder="Enter Full Name"
              autoComplete="off"
            />
            {nameErrorMessage && (
              <p className="text-[red]">{nameErrorMessage}</p>
            )}
          </>
        )}

        <InputField
          inputRef={emailRef}
          id="Email"
          type="text"
          placeholder="Email Address"
          autoComplete="off"
        />
        {/* Error message for Email ID  */}
        {emailErrorMessage && <p className="text-[red]">{emailErrorMessage}</p>}

        <InputField
          inputRef={passwordRef}
          id="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        {/* Error message for Password  */}
        {passwordErrorMessage && (
          <p className="text-[red]">{passwordErrorMessage}</p>
        )}

        {authError && <p className="text-[red]">{authError}</p>}

        {isSignInForm ? (
          <Button text="Sign In" onClick={handleSignIn} />
        ) : (
          <Button text="Sign Up" onClick={handleSignUp} />
        )}

        <p className="text-[#737373] pt-12 pb-2">
          {isSignInForm ? "New to Neflix?" : "Already registered?"}

          <button
            type="submit"
            className="text-white font-light cursor-pointer px-2"
            onClick={handleToggleForm}
          >
            {isSignInForm ? "Sign up now" : " Sign In now"}
          </button>
        </p>

        <p className="text-[#8c8c8c] pb-8 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
