import React, { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";

export const appContext = createContext();

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getData = () => {
    let action = {
      type: "GET_DATA",
      payload: [1, 2, 3, 4],
    };
    dispatch(action);
    // console.log(state);
  };

  const sendReq = () => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(data);
  };

  let value = { name: "rena", getData, sendReq };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};

export default AppContextProvider;
