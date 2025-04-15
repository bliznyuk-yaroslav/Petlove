import { createSlice } from "@reduxjs/toolkit";
import { clearAuthHeader, fetchRegister } from "./operations";

const authInitialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: false,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
      clearAuthHeader();
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      }),
});
export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
