import { createSlice } from "@reduxjs/toolkit";
import { clearAuthHeader, fetchRegister, logIn, logout } from "./operations";

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
      })
      .addCase(logIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.error = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(logout.pending, (state) => {
        state.token = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.token = "";
        state.error = action.error;
      }),
});
export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
