const fetch = require("node-fetch");
const APIXU_KEY = "797c862b80c857f4df9b3075d1f5a60d";

const fetchNow = async (city) => { 
  const response = await fetch(`http://api.weatherstack.com/current?access_key=${APIXU_KEY}&query=${city}`);
  const data = await response.json();

  const now = {
    location: data.location.name,
    country: data.location.country,
    longitude: data.location.lon,
    latitude: data.location.lat,
    temperature: data.current.temperature,
    weather_descriptions: data.current.weather_descriptions
  }

  console.log(now)
}; 

const weatherForecast = async (city) => { // http://api.weatherstack.com/current?access_key=797c862b80c857f4df9b3075d1f5a60d&query=New%20York
  const response = await fetch(`http://api.weatherstack.com/forecast?access_key=${APIXU_KEY}&query=${city}`);
  const data = await response.json();

  console.log(data.forecast);
};

module.exports = {
  fetchNow,
  weatherForecast
}