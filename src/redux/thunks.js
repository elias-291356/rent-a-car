import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { fetchAllCars, fetchCars } from "../service/api";

export const fetchCarsThunks = createAsyncThunk('adverts/car', async (page, thunkAPI) => {
  try {
    const data = await fetchCars(page);
    return data;
  } catch (error) {
    toast.error('Error fetching cars:', error);
    throw error;
  }
});
export const fetchAllCarsThunks = createAsyncThunk('adverts/Allcar', async (filterQuery, thunkAPI) => {

  const { make, price, mileageFrom, mileageTo } = filterQuery;
  try {

    const data = await fetchAllCars(filterQuery);
    let result = data;

    if (make) {
      result = result.filter(car => car.make.includes(make.label))

    }
    if (price) {
      result = result.filter(car => {
        const carPrice = parseFloat(car.rentalPrice.replace("$", ""));
        return carPrice <= price.value;
      });

      if (result.length === 0) {
        toast.warning('No car found based on your criteria');
      }
    }


    if (mileageFrom || mileageTo) {
      result = result.filter(car => {
        const meetsMileageCriteria =
          (!mileageFrom || car.mileage >= mileageFrom) &&
          (!mileageTo || car.mileage <= mileageTo);
        return meetsMileageCriteria;
      });
      if (result.length === 0) {
        toast.warning('No car found based on your criteria');
      }
    }
    return result;
  } catch (error) {
    toast.error('Error fetching cars:', error);
    throw error;
  }
});


