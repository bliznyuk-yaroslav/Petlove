import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiClient = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
  headers: {
    "Content-Type": "application/json",
  }
});

export const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const fetchRegister = createAsyncThunk(
  "auth/signup",
  async (userInfo, thunkAPI) => {
    try {
      const response = await apiClient.post("/users/signup", userInfo);
      console.log(response);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
