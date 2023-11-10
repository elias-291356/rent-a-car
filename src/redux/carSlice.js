
import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsThunks } from './thunks.js';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    carItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => builder
    .addCase(fetchCarsThunks.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCarsThunks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.carItems = payload
      state.error = null;
    })
    .addCase(fetchCarsThunks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
})

export default carSlice.reducer;