import { createSlice } from "@reduxjs/toolkit";
import { fetchCities, fetchCitiesLocation } from "./operations";

const initialState = {
  cities: {
    locations: "",
    cities: [],
    citiesLocation: [],
  },
  selectedLocation: null,

  error: null,
};
const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSearchLocations: (state, action) => {
      state.locations = action.payload;
    },
    setLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    resetFiltersCities: (state) => {
      state.selectedLocation = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.error = null;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.cities = [];
        state.error = action.payload;
      })
      .addCase(fetchCitiesLocation.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCitiesLocation.fulfilled, (state, action) => {
        state.error = null;
        state.citiesLocation = action.payload;
      })
      .addCase(fetchCitiesLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.citiesLocation = [];
      });
  },
});
export const { setSearchLocations, setLocation, resetFiltersCities } =
  citiesSlice.actions;
export default citiesSlice.reducer;
