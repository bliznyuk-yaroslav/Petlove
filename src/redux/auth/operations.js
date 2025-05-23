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

const getToken = (state) => state.auth.token || localStorage.getItem("token");
let interceptorId;
export const setupAxiosInterceptors = (store) => {
  interceptorId = apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const state = store.getState();
        const token = state.auth.token || localStorage.getItem("token");
        const email = state.auth.email || localStorage.getItem("email");
        const password =
          state.auth.password || localStorage.getItem("password");

        if (!token || !email || !password) {
          store.dispatch(logout());
          return Promise.reject(error);
        }

        try {
          const userInfo = { email, password };

          const resultAction = await store.dispatch(logIn(userInfo));
          const newToken = resultAction.payload.token;
          setAuthHeader(newToken);
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

          return apiClient(originalRequest);
        } catch (loginError) {
          store.dispatch(logout());
          return Promise.reject(loginError);
        }
      }

      return Promise.reject(error);
    }
  );
};
export const ejectAxiosInterceptor = () => {
  if (interceptorId !== undefined) {
    apiClient.interceptors.response.eject(interceptorId);
    interceptorId = undefined;
  }
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
      localStorage.setItem("email", userInfo.email);
      localStorage.setItem("password", userInfo.password);
      return {
        ...response.data,
        email: userInfo.email,
        password: userInfo.password,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "users/signout",
  async (__, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      if (!token) {
        return thunkAPI.rejectWithValue("No auth token found");
      }
      setAuthHeader(token);
      const response = await apiClient.post("users/signout");
      clearAuthHeader();
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      ejectAxiosInterceptor();
      return response.data;
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

export const editCurrent = createAsyncThunk(
  "edit/current",
  async (userInfo, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      if (!token) {
        return thunkAPI.rejectWithValue("No auth token found");
      }
      setAuthHeader(token);
      const response = await apiClient.patch("/users/current/edit", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addPets = createAsyncThunk(
  "add/Pets",
  async (petsInfo, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      if (!token) {
        return thunkAPI.rejectWithValue("No auth token found");
      }
      setAuthHeader(token);
      const response = await apiClient.post(
        "/users/current/pets/add",
        petsInfo
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchAllCurrent = createAsyncThunk(
  "fetch/UserCurrent",
  async (__, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      setAuthHeader(token);
      const response = await apiClient.get("/users/current/full");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deletePetsId = createAsyncThunk(
  "delete/Pets",
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      setAuthHeader(token);
      const response = await apiClient.delete(
        `/users/current/pets/remove/${_id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteFavorite = createAsyncThunk(
  "delete/favorite",
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      setAuthHeader(token);
      const response = await apiClient.delete(
        `/notices/favorites/remove/${_id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addViewedPets = createAsyncThunk(
  "add/viewed/pets",
  async (_id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = getToken(state);
      setAuthHeader(token);
      const response = await apiClient.get(`/notices/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
