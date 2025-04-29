import { createSlice } from "@reduxjs/toolkit";
import {
  addPets,
  clearAuthHeader,
  deletePetsId,
  editCurrent,
  fetchAllCurrent,
  fetchRegister,
  logIn,
  logout,
} from "./operations";

const authInitialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: false,
  isLoggedIn: false,
  isRefreshing: false,
  password: localStorage.getItem("password") || null,
  email: localStorage.getItem("email") || null,
  fullUserInfo: null,
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
      state.fullUserInfo = null;
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
        state.email = action.payload.email;
        state.password = action.payload.password;
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
        state.email = null;
        state.password = null;
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      })
      .addCase(logout.rejected, (state, action) => {
        state.token = "";
        state.error = action.error;
      })
      .addCase(editCurrent.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCurrent.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload;
        if (action.payload.token) {
          state.token = action.payload.token;
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(editCurrent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addPets.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(addPets.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.payload;
      })
      .addCase(fetchAllCurrent.fulfilled, (state, action) => {
        state.fullUserInfo = action.payload;
      })
      .addCase(fetchAllCurrent.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deletePetsId.fulfilled, (state, action) => {
        state.fullUserInfo = action.payload;
      })
      .addCase(deletePetsId.rejected, (state, action) => {
        state.error = action.payload;
      }),
});
export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
