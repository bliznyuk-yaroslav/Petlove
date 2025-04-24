import { createSlice } from "@reduxjs/toolkit";
import { addNoticesFavorites } from "./operations";

const initialState = {
  favorites: [],
  loading: false,
  error: null,
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
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
      }),
});
export default favoritesSlice.reducer;
