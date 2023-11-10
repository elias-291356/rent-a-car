import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCars } from "../service/api";
import { fetchLoadMore } from "../service/api";
import { toast } from 'react-toastify';

export const fetchCarsThunks = createAsyncThunk('adverts/car', async (_, thunkAPI) => {
  try {
    const data = await fetchCars();
    return data;
  } catch (error) {
    toast.error('Error:' + error,);
  }
});

export const fetchLoadMoreThunks = createAsyncThunk('adverts/car', async (_, thunkAPI) => {
  try {
    const data = await fetchLoadMore();
    return data;
  } catch (error) {
    toast.error('Error:' + error,);
  }
});




