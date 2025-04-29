import { createSlice } from "@reduxjs/toolkit";
import { addNoticesFavorites, deleteFavorite } from "./operations";

const initialState = {
  favorites: [],
  loading: false,
  error: null,
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favorites = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addNoticesFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNoticesFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(addNoticesFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
export const { clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
