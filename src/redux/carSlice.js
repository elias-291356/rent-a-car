
import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunks } from './thunks.js';
import allCarsItem from "../makes.json";
const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carItems: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 12,
    allCarsItem: [...allCarsItem]
  },

  reducers: {},

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
      }),
});

export default carSlice.reducer;