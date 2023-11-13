
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunks, fetchCarsThunks } from './thunks.js';
import allCarsItem from "../makes.json";
const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carItems: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 12,
    allCarsItem: [...allCarsItem],
    isSubmitted: false,
    carBrand: [],
    filteredCars: [],
    rentalPrice: '',
  },

  reducers: {
    setCarBrand: (state, action) => {
      state.carBrand = action.payload;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setSubmitted: (state, action) => {
      state.isSubmitted = true;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchCarsThunks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsThunks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.page++;
        state.carItems.push(...action.payload);
      })
      .addCase(fetchCarsThunks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCarsThunks.fulfilled, (state, action) => {
        state.filteredCars = action.payload;
      })
});

export default carSlice.reducer;
export const { setSubmitted, setCarBrand, setRentalPrice } = carSlice.actions;