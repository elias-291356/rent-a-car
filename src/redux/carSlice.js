
import { fetchCars } from '../service/api.js'
import { createSlice } from '@reduxjs/toolkit'

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => builder
    .addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload
      state.error = null;
    })
    .addCase(fetchCars.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
})

export default carSlice.reducer;