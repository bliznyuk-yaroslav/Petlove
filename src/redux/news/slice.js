import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const initialState = {
  news: {
    page: 1,
    search: "",
    results: [],
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
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.news.page = action.payload;
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
        state.news.totalPage = action.payload.totalPage;
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
