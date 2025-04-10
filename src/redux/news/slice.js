import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const initialState = {
  news: {
    page: 1,
    search: "pets",
    result: [],
    totalPage: 0,
    perPage: 6,
  },
  isLoading: false,
  error: null,
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.news = [];
      });
  },
});
export const { setPage, setSearch } = newsSlice.actions;

export default newsSlice.reducer;
