import axios from 'axios';

const BASE_URL = "https://654baa7e5b38a59f28ef7bae.mockapi.io";
const $instance = axios.create({ baseURL: BASE_URL });
export const fetchCars = async () => {
  const { data } = await $instance.get('/adverts/car', {
    params: {
      limit: 12,
      page: 1,
    }
  }
  )
  return data
}
export const fetchLoadMore = async () => {
  const { data } = await $instance.get('/adverts/car', {
    params: {
      limit: 12,
      page: 2,
    }
  }
  )
  return data
}


