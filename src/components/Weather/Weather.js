import React, { useState, useEffect } from "react";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65db83cf65e337e4782db3074f7add50&units=metric`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          setErrorMessage(null);
        } else {
          setErrorMessage("City not found. Please try again.");
        }
      } catch (error) {
        setErrorMessage("Error fetching weather data. Please try again later.");
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleRefresh = () => {
    window.location.reload();
  };

  if (errorMessage) {
    return (
      <div>
        <p>{errorMessage}</p>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    );
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  // prettier-ignore
  const weatherIcons = {
    "clear sky": "01d",
    "few clouds": "02d",
    "scattered clouds": "03d",
    "broken clouds": "04d",
    "overcast clouds": "04d",
    "shower rain": "09d",
    "rain": "10d",
    "light rain": "10d",
    "thunderstorm": "11d",
    "snow": "13d",
    "light snow": "13d",
    "mist": "50d",
  };

  const weatherDescription = weatherData.weather[0].description;
  const iconId = weatherIcons[weatherDescription];
  const iconUrl = `https://openweathermap.org/img/w/${iconId}.png`;

  return (
    <div>
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <img className="weather-icon" src={iconUrl} alt="Weather Icon" />
      <p>Current temperature: {weatherData.main.temp.toFixed(1)}°C</p>
      <p>Feels like: {weatherData.main.feels_like.toFixed(1)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
