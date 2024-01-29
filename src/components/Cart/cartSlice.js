import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: { products: [] },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {},
  },
});
