import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://petlove.b.goit.study/api";
export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (params = {}, thunkAPI) => {
    const {
      search,
      category,
      species,
      locationId,
      byDate,
      byPrice,
      byPopularity,
      page = 1,
      limit = 6,
      sex,
    } = params;
    const queryParams = {
      keyword: search,
      category,
      species,
      locationId,
      byDate,
      byPrice,
      byPopularity,
      page,
      limit,
      sex,
    };
    Object.keys(queryParams).forEach((key) => {
      if (
        queryParams[key] === "" ||
        queryParams[key] === null ||
        queryParams[key] === undefined
      ) {
        delete queryParams[key];
      }
    });
    try {
      const response = await axios.get(`${BASE_URL}/notices`, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "notices/fetchCategories",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/notices/categories`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchSpecies = createAsyncThunk(
  "notices/fetchSpecies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/notices/species`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchSex = createAsyncThunk(
  "notices/fetchSex",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/notices/sex`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
