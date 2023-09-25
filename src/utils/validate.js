export const validateName = (name) => {
  const nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  const isValidName = nameRegex.test(name);

  if (!isValidName) {
    return "Name is Not Valid";
  }
  return undefined;
};

export const validateEmail = (email) => {
  // regular expression for Email
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/;

  // returns a "boolean" value indicating whether the email address is valid according to the regular expression.
  const isValidEmail = emailRegex.test(email);

  if (!isValidEmail) {
    return "Email Id is Not Valid";
  }

  return null;
};

export const validatePassword = (password) => {
  // regular expression for Password
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  // returns a "boolean" value indicating whether the password address is valid according to the regular expression.
  const isValidPassword = passwordRegex.test(password);

  if (!isValidPassword) {
    return "Password is Not Valid";
  }

  return null;
};

//   export const validateEmailPassword = (email, password) => {
//     // regular expression for Email & Password
//     const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

//     // returns a "boolean" value indicating whether the email & password address is valid according to the regular expression.
//     const isValidEmail = emailRegex.test(email);
//     const isValidPassword = passwordRegex.test(password);

//     if (!isValidEmail) {
//       return "Email Id is Not Valid";
//     }
//     if (!isValidPassword) {
//       return "Password is Not Valid";
//     }

//     return console.log("Email & Password is Valid");
//   };
