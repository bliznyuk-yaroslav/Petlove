import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://petlove.b.goit.study/api";
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (params = {}, thunkAPI) => {
    const { page = 1, search = "", limit = 6 } = params;
    try {
      const response = await axios.get(
        `${BASE_URL}/news?keyword=${search}&page=${page}&limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
