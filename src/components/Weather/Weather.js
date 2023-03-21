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
    "haze": "50d",
  };
  // prettier-ignore
  const weatherBackgrounds = {
    "clear sky": "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg?w=1060&t=st=1679431165~exp=1679431765~hmac=6dad7f84467ca04f627733176bca11fa6a20af5499cb4d55ce34aee4c2ef16ef",
    "few clouds": "https://img.freepik.com/free-photo/cloud-blue-sky_1150-35749.jpg?size=626&ext=jpg",
    "scattered clouds": "https://img.freepik.com/free-photo/cloudy-rainy-blue-dark-sky_657883-673.jpg?size=626&ext=jpg",
    "broken clouds": "https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg?w=1060&t=st=1679429928~exp=1679430528~hmac=0a69b8093832c0058c58dcd83f329558b63cb1acbe9e5eeba4c5595300617a35",
    "overcast clouds": "https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg?size=626&ext=jpg",
    "shower rain": "https://img.freepik.com/free-photo/rain-drops-glass-black-background_53876-106177.jpg?size=626&ext=jpg",
    "rain": "https://img.freepik.com/free-photo/water-texture-background-rainy-window-cloudy-day_53876-153383.jpg?size=626&ext=jpg",
    "light rain": "https://img.freepik.com/free-photo/water-texture-background-rainy-window-cloudy-day_53876-153383.jpg?size=626&ext=jpg",
    "thunderstorm": "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853306.jpg?size=626&ext=jpg",
    "snow": "https://img.freepik.com/free-photo/3d-render-defocussed-snowy-tree-landscape_1048-14924.jpg?w=996&t=st=1679431346~exp=1679431946~hmac=0b1f84d1d0a1463456677e03bb86dbc1be21c8387d6995da23941bb7cc9231b5",
    "light snow": "https://img.freepik.com/free-photo/3d-render-defocussed-snowy-tree-landscape_1048-14924.jpg?w=996&t=st=1679431346~exp=1679431946~hmac=0b1f84d1d0a1463456677e03bb86dbc1be21c8387d6995da23941bb7cc9231b5",
    "mist": "https://img.freepik.com/free-photo/high-angel-shot-fog-mountain-forests_181624-30816.jpg?w=1380&t=st=1679431587~exp=1679432187~hmac=4fa5b481a7f8eeeefe1a5389f872b36844182cbdbb5b36850c3fcf6bf6cdcf3d",
    "haze": "https://img.freepik.com/free-photo/high-angel-shot-fog-mountain-forests_181624-30816.jpg?w=1380&t=st=1679431587~exp=1679432187~hmac=4fa5b481a7f8eeeefe1a5389f872b36844182cbdbb5b36850c3fcf6bf6cdcf3d",
  };

  const weatherDescription = weatherData.weather[0].description;
  const backgroundImageUrl = weatherBackgrounds[weatherDescription];
  document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
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
