import { createSlice } from "@reduxjs/toolkit";
import { fetchCities, fetchCitiesLocation } from "./operations";

const initialState = {
  cities: {
    locations: "",
    cities: [],
    citiesLocation: [],
  },
  isLoading: false,
  error: null,
};
const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSearchLocations: (state, action) => {
      state.locations = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.isLoading = false;
        state.cities = [];
        state.error = action.payload;
      })
      .addCase(fetchCitiesLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCitiesLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.citiesLocation = action.payload;
      })
      .addCase(fetchCitiesLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.citiesLocation = [];
      });
  },
});
export const { setSearchLocations } = citiesSlice.actions;
export default citiesSlice.reducer;
