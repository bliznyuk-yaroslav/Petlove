import { createSlice } from "@reduxjs/toolkit";
import { addNoticesFavorites, deleteFavorite } from "./operations";

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.favorites = [];
      state.isLoading = false;
      state.error = null;
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addNoticesFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNoticesFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(addNoticesFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(deleteFavorite.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
export const { clearFavorites, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
