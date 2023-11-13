import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCars } from "../service/api";

export const fetchCarsThunks = createAsyncThunk('adverts/car', async (page, thunkAPI) => {
  try {
    const data = await fetchCars(page);
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
});
export const fetchAllCarsThunks = createAsyncThunk('adverts/Allcar', async (filterQuery, thunkAPI) => {
  const { make, price, mileageFrom, mileageTo } = filterQuery;
  try {

    const data = await fetchAllCars(filterQuery);
    let result = data;
    if (make) {
      result = result.filter(car => car.make === make)

    }
    if (price) {
      result = result.filter(car => car.rentalPrice === price)
    }
    if (mileageFrom) {
      result = result.filter(car => car.mileage >= mileageFrom)
    }
    if (mileageTo) {
      result = result.filter(car => car.mileage <= mileageTo)
    }
    return result;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
});


