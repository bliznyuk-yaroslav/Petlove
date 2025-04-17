import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiClient = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthHeader = (token) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  delete apiClient.defaults.headers.common["Authorization"];
};

export const fetchRegister = createAsyncThunk(
  "auth/signup",
  async (userInfo, thunkAPI) => {
    try {
      const response = await apiClient.post("/users/signup", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await apiClient.post("/users/signin", userInfo);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "users/signout",
  async (__, thunkAPI) => {
    try {
      await apiClient.post("users/signout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
