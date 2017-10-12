import axios from 'axios';

const OPEN_WEATHER_API_KEY = '67f1dca8f05faa04105ca2d317a06c41';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
