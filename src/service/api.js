import axios from 'axios';


const BASE_URL = "https://654baa7e5b38a59f28ef7bae.mockapi.io";
const $instance = axios.create({ baseURL: BASE_URL });

export const fetchCars = async (page = 1, limit = 12) => {
  const { data } = await $instance.get('/adverts/car', {
    params: {
      page: page,
      limit: limit,
    }
  });
  return data;
};


