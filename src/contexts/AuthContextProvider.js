import React, { createContext, useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../helpers/fire";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const register = (email, password) => {
    // const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(userCredential.user);
        alert("user is created");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("user is alredy created or uncorrect data");
        // ..
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(userCredential.user);
        console.log(user);
        alert("you are logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("uncorrect data, pls try again");
        // ..
      });
  };
  let value = { register, login };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
