import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../helpers/consts";

const initialState = {
  products: [],
  types: [],
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
  reducers: {
    getTypes: (state) => {
      let res = state.products.map((product) => product.type);
      let typeArray = [...new Set(res)];
      state.types = typeArray;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getOneProduct.fulfilled, (state, action) => {
      state.oneProduct = action.payload;
      console.log("One Product Response:", state.oneProduct);
    });
  },
});

// Action creators are generated for each case reducer function
export const { getTypes } = productsSlice.actions;

export default productsSlice.reducer;
