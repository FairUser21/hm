import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/Products/store/productsSlice";
import cartReducer from "../components/Cart/redux/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
