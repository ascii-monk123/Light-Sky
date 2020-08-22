import axios from '../axios-weather';
import {
  findTime,
  findDay,
  kelvinToCelsius,
  capitalize,
  findDate,
} from '../Helpers/helpers';
const key = '600409249d829db023a38425bd27549b';
const iconUrl = 'http://openweathermap.org/img/wn';
// http://openweathermap.org/img/wn/10d@2x.png

const fetchWeather = async (query) => {
  const {
    data: {
      main: { temp, temp_max, temp_min, humidity },
      name,
      sys: { country, sunrise, sunset },
      dt,
      weather: [{ main, description }],
      wind: { speed },
    },
  } = await axios.get(`/weather?q=${query}&appid=${key}`);

  return {
    temp,
    temp_max,
    temp_min,
    name,
    country,
    sunrise,
    sunset,
    dt,
    main,
    description,
    speed,
    humidity,
  };
};

const fetchForecast = async (query) => {
  const {
    data: { list },
  } = await axios.get(`/forecast?q=${query}&appid=${key}`);
  const data = list.map((weather, index) => {
    return {
      time: findTime(weather.dt),
      tempMin: kelvinToCelsius(weather.main.temp_min),
      tempMax: kelvinToCelsius(weather.main.temp_max),
      main: capitalize(weather.weather[0].description),
      windSpeed: weather.wind.speed,
      imgUrl: `${iconUrl}/${weather.weather[0].icon}@4x.png`,
      day: findDay(weather.dt),
      date: findDate(weather.dt),
    };
  });
  return data;
};

export { fetchWeather, fetchForecast };

/**
 * {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
base: "stations"
clouds: {all: 0}
cod: 200
coord: {lon: 139.75, lat: 35.69}
dt: 1597946590
id: 1861060
main:
feels_like: 303.65
humidity: 88
pressure: 1012
temp: 301.09
temp_max: 302.04
temp_min: 299.82
__proto__: Object
name: "Japan"
sys: {type: 1, id: 8074, country: "JP", sunrise: 1597953882, sunset: 1598001839}
timezone: 32400
visibility: 10000
weather: Array(1)
0:
description: "clear sky"
icon: "01n"
id: 800
main: "Clear"
__proto__: Object
length: 1
__proto__: Array(0)
wind:
deg: 190
speed: 6.2
__proto__: Object
__proto__: Object
 * 
 * 
 */
