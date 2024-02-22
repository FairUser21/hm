import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/Products/store/productsSlice";
import cartReducer from "../components/Cart/redux/cartSlice";
import authReducer from "../components/Auth/store/authSlice";
import favoritesReducer from "../components/Favorites/favSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
});

export default store;
