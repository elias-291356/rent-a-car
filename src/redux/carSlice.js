
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCarsThunks, fetchCarsThunks } from './thunks.js';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carItems: [],
    filteredCars: [],
    isLoading: false,
    isSubmitted: false,
    error: null,
    page: 1,
    limit: 12,
    isOpenModal: false,
    favoriteCars: [],

  },

  reducers: {


    setSubmitted: (state, action) => {
      state.isSubmitted = true;
    },
    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
    setFavoriteCars: (state, action) => {
      state.favoriteCars = action.payload;

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




      .addCase(fetchAllCarsThunks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCarsThunks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.filteredCars = action.payload;
        state.isSubmitted = true
      })

      .addCase(fetchAllCarsThunks.rejected, (state, action) => {
        state.filteredCars.push(...action.payload);
      })

});

export const reducerCar = carSlice.reducer;

export const { setSubmitted, setIsOpenModal, setFavoriteCars } = carSlice.actions;