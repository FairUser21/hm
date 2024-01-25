import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/Products/store/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
