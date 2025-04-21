import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchNotices,
  fetchSex,
  fetchSpecies,
} from "./operations";

const initialState = {
  notices: {
    page: 1,
    perPage: 6,
    search: "",
    totalPages: 0,
    results: [],
  },
  filters: {
    categories: [],
    species: [],
    sex: [],
    setSex: "",
    setSpecies: "",
    setCategory: "",
  },
  isLoading: false,
  error: null,
};
const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.notices.page = action.payload;
    },
    setSex: (state, action) => {
      state.filters.setSex = action.payload;
    },
    setSpecies: (state, action) => {
      state.filters.setSpecies = action.payload;
    },
    setCategory: (state, action) => {
      state.filters.setCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.notices = action.payload;
        state.notices.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.notices = [];
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.filters.categories = action.payload;
      })
      .addCase(fetchSex.fulfilled, (state, action) => {
        state.filters.sex = action.payload;
      })
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.filters.species = action.payload;
      });
  },
});
export const { setPage, setSearch, setSex, setCategory, setSpecies } =
  noticesSlice.actions;
export default noticesSlice.reducer;
