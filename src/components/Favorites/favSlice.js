import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteProductIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFav(state, action) {
      const favProducts = action.payload;
      const existingIndex = state.favoriteProductIds.findIndex(
        (item) => item.id === favProducts.id
      );
      console.log(favProducts, "fav");
      if (existingIndex === -1) {
        state.favoriteProductIds.push(favProducts);
        localStorage.setItem(
          "favProducts",
          JSON.stringify(state.favoriteProductIds)
        );
      }
    },

    getFav(state) {
      const favProducts = JSON.parse(localStorage.getItem("favProducts"));

      if (favProducts) {
        state.favoriteProductIds = favProducts;
      }
    },

    removeFromFav(state, action) {
      const favProducts = action.payload;
      state.favoriteProductIds = state.favoriteProductIds.filter(
        (item) => item.id !== favProducts.id
      );
      console.log(action.payload, "remove");
      localStorage.setItem(
        "favProducts",
        JSON.stringify(state.favoriteProductIds)
      );
    },
  },
});

export const { addToFav, removeFromFav, getFav } = favoritesSlice.actions;
export default favoritesSlice.reducer;
