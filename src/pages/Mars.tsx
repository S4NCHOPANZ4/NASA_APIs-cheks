import React, { useState, useEffect } from 'react'
import axios from "axios";

type WeatherData = {
    sol_keys: string[];
    validity_checks: any;
    [key: string]: any;
  };

const Mars = () => {
const [data, setData] = useState();
const [weatherData, setWeatherData] = useState<WeatherData | null>(null);


// const fetchWeather = async () => {
//     const weather = await (await fetch(`https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`)).json();
//     console.log(weather);
// }
// useEffect(() => {
//     fetchWeather()
// },[])

useEffect(() => {
    const fetchWeatherData = async () => {
  
      const url = `https://api.nasa.gov/insight_weather/?api_key=${import.meta.env.VITE_API_KEY}&feedtype=json&ver=1.0`;
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, []);
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const latestSol = weatherData.sol_keys[weatherData.sol_keys.length - 1];
  console.log("latestSol:", latestSol);
  const latestWeather = weatherData[latestSol];
  console.log("latestWeather:", latestWeather);
  return (
    <div>
      {/* <h1>Latest Weather on Mars</h1>
      <p>Sol: {latestSol}</p>
      <p>Average Wind Speed: {latestWeather.WD.av} m/s</p>
      <p>Atmospheric Opacity: {latestWeather.AT.PRE}</p>
      <p>Pressure: {latestWeather.PRE.av} Pa</p>
      <p>Minimum Temperature: {latestWeather.AT.mn} &deg;C</p>
      <p>Maximum Temperature: {latestWeather.AT.mx} &deg;C</p> */}
    </div>
  )
}

export default Mars