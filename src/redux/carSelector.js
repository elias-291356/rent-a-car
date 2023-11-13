export const selectCars = (state) => state.cars.carItems;
export const selectAllCarsItem = (state) => state.cars.allCarsItem;
export const selectLoader = (state) => state.cars.isLoading;
export const selectCurrentPage = (state) => state.cars.page;
export const selectCurrentLimit = (state) => state.cars.limit;
export const selectSubmitForm = (state) => state.cars.isSubmitted;
export const selectCarBrand = (state) => state.cars.carBrand;

// export const selectCarModelsByBrand = (state, selectedBrand) => {
//   const allCarsItem = selectAllCarsItem(state);
//   const brandData = allCarsItem.find((item) => item.brand === selectedBrand);
//   return brandData ? brandData.models : [];
// };