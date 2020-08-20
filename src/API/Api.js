import axios from '../axios-weather';
const key = '600409249d829db023a38425bd27549b';

const fetchWeather = async (query) => {
  const { data } = await axios.get(`/weather?q=${query}&appid=${key}`);
  return data;
};

export { fetchWeather };
