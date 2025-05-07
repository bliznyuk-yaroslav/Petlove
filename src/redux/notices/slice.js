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
    selectedLocation: "",
    byPopularity: null,
    byPrice: null,
  },
  isLoading: false,
  firstLoadDone: false,
  error: null,
};
const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPageNotices: (state, action) => {
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
    setSearchLocations: (state, action) => {
      state.filters.selectedLocation = action.payload;
    },
    setPopularity: (state, action) => {
      state.filters.byPopularity = action.payload;
    },
    setPrice: (state, action) => {
      state.filters.byPrice = action.payload;
    },

    resetFiltersNotices: (state) => {
      state.filters.setSex = "";
      state.filters.setSpecies = "";
      state.filters.setCategory = "";
      state.search = "";
      state.filters.byPopularity = null;
      state.filters.selectedLocation = null;
      state.notices.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state) => {
        if (!state.firstLoadDone) {
          state.isLoading = true;
        }
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.notices = action.payload;
        state.notices.totalPages = action.payload.totalPages;
        state.firstLoadDone = true;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.error = action.payload;
        state.notices = {
          page: 1,
          perPage: 6,
          search: "",
          totalPages: 0,
          results: [],
        };
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
export const {
  setPageNotices,
  setSearch,
  setSex,
  setCategory,
  setSpecies,
  resetFiltersNotices,
  setSearchLocations,
  setPopularity,
  setPrice,
} = noticesSlice.actions;
export default noticesSlice.reducer;
