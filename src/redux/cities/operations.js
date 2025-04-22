import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://petlove.b.goit.study/api";

export const fetchCities = createAsyncThunk(
  "/cities/fetchCities",
  async (params = {}, thunkAPI) => {
    const { location = "" } = params;
    try {
      const response = await axios.get(
        `${BASE_URL}/cities?keyword=${location}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCitiesLocation = createAsyncThunk(
  "/cities/fetchCitiesLocations",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/cities/locations`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
