import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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

const getToken = (state) => state.auth.token || localStorage.getItem("token");
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
export const addNoticesFavorites = createAsyncThunk(
  "notices/addToFavorites",
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      if (!token) {
        return thunkAPI.rejectWithValue("No auth token found");
      }
      setAuthHeader(token);
      const response = await apiClient.post(`/notices/favorites/add/${_id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
