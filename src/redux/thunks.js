import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../service/api";

export const fetchCarsThunks = createAsyncThunk('adverts/car', async (page, thunkAPI) => {
  try {
    const data = await fetchCars(page);
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
});


