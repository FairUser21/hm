import { createSlice } from "@reduxjs/toolkit";
import { calcSubPrice, calcTotalPrice } from "../../../helpers/func";
import { act } from "react-dom/test-utils";

const initialState = {
  cart: { products: [], totalPrice: 0 },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = { products: [], totalPrice: 0 };
      }

      let oneProduct = {
        item: action.payload,
        count: 1,
        subPrice: action.payload.price,
      };
      cart.products.push(oneProduct);

      cart.totalPrice = calcTotalPrice(cart.products);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    getCart(state) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = { products: [], totalPrice: 0 };
      }
      state.cart = cart;
    },
    changeCount(state, action) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = { products: [], totalPrice: 0 };
      }

      let res = cart.products.map((item) => {
        if (item.item.id === action.payload.id) {
          item.count = action.payload.count;
          item.subPrice = calcSubPrice(item);
        }
        return item;
      });
      cart.products = res;
      cart.totalPrice = calcTotalPrice(cart.products);
      localStorage.setItem("cart", JSON.stringify(cart));
      state.cart = cart;
    },
    deleteItemInCart(state, action) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (!cart) {
        cart = { products: [], totalPrice: 0 };
      }
      console.warn(action.payload);
      let res = cart.products.filter((item) => item.item.id !== action.payload);
      cart.products = res;
      cart.totalPrice = calcTotalPrice(cart.products);
      localStorage.setItem("cart", JSON.stringify(cart));
      state.cart = cart;
    },
  },
});

export const { addToCart, getCart, changeCount, deleteItemInCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// cart: {products: [{item: {}, count: 0, subPrice: 0}, {item: {}, count: 0, subPrice: 0}], totalPrice: 0}
