import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = ('https://654baa7e5b38a59f28ef7bae.mockapi.io');

// https://654baa7e5b38a59f28ef7bae.mockapi.io/adverts/car

export const fetchCars = createAsyncThunk('adverts/car', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/adverts/car');

    console.log(data)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
// export const fetchCars = createAsyncThunk(
//   'adverts/fetchForFilter',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/adverts/car');
//       console.log(response)
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchCars = createAsyncThunk('cars/fetchCars', async (_, { rejectWithValue }) => {
//   try {
//     const { data } = await axios.get('/adverts/car')
//     console.log(data)
//     return data
//   } catch (error) {
//     return rejectWithValue(error.message)
//   }
// })


// export const fetchCars = createAsyncThunk(
//   'adverts/fetchForFilter',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/adverts/car');
//       console.log(response.data)
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );