import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../helpers/consts";

const initialState = {
  products: [],
  oneProduct: {},
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios(`${API}${window.location.search}`);

    return response.data;
  }
);
export const getOneProduct = createAsyncThunk(
  "products/getOneProduct",
  async (id) => {
    const response = await axios.get(`${API}/${id}`);

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products = action.payload;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.oneProduct = action.payload;
      console.log("One Product Response:", action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;

export default productsSlice.reducer;
