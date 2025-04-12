import { createSlice } from "@reduxjs/toolkit";
import { fetchFriends } from "./operations";
const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};
const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.friends = action.payload;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.friends = [];
      });
  },
});
export default friendsSlice.reducer;
