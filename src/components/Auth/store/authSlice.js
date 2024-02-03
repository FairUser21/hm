import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../helpers/fire";
import { createSlice } from "@reduxjs/toolkit";

export const register = (email, password) => {
  // const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // setUser(userCredential.user);
      alert("user is created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("user is already created or incorrect data");
      // ..
    });
};

export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // setUser(userCredential.user);
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

const initialState = {
  auth: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
