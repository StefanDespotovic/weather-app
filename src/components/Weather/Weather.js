/**

A component that displays weather information for a given city.
@param {Object} props - The props object.
@param {string} props.city - The name of the city to display weather for.
@returns {JSX.Element} - The Weather component.
*/
import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    /**
     * Fetches weather data for the given city using the OpenWeatherMap API.
     * @async
     * @function fetchWeatherData
     */
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
  /**

Reloads the page to refresh weather data.
@function handleRefresh
*/

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
  /**

Object containing weather icons corresponding to different weather conditions.
@const {Object} weatherIcons
*/
  // prettier-ignore
  const weatherIcons = {
    "clear sky": "01d",
    "few clouds": "02d",
    "scattered clouds": "03d",
    "broken clouds": "04d",
    "overcast clouds": "04d",
    "shower rain": "09d",
    "rain": "10d",
    "moderate rain": "10d",
    "light rain": "10d",
    "thunderstorm": "11d",
    "snow": "13d",
    "light snow": "13d",
    "mist": "50d",
    "haze": "50d",
    "smoke": "50d",
  };
  /**

Object containing background images corresponding to different weather conditions.
@const {Object} weatherBackgrounds
*/
  // prettier-ignore
  const weatherBackgrounds = {
    "clear sky": "https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7709.jpg?w=1060&t=st=1679431165~exp=1679431765~hmac=6dad7f84467ca04f627733176bca11fa6a20af5499cb4d55ce34aee4c2ef16ef",
    "few clouds": "https://img.freepik.com/free-photo/cloud-blue-sky_1150-35749.jpg?size=626&ext=jpg",
    "scattered clouds": "https://images.pexels.com/photos/15894610/pexels-photo-15894610.jpeg?auto=compress",
    "broken clouds": "https://images.pexels.com/photos/3742711/pexels-photo-3742711.jpeg?auto=compress",
    "overcast clouds": "https://img.freepik.com/free-photo/black-rain-abstract-dark-power_1127-2380.jpg",
    "shower rain": "https://img.freepik.com/free-photo/rain-drops-glass-black-background_53876-106177.jpg?size=626&ext=jpg",
    "rain": "https://img.freepik.com/free-photo/water-texture-background-rainy-window-cloudy-day_53876-153383.jpg?size=626&ext=jpg",
    "moderate rain": "https://img.freepik.com/free-photo/water-texture-background-rainy-window-cloudy-day_53876-153383.jpg?size=626&ext=jpg",
    "light rain": "https://img.freepik.com/free-photo/water-texture-background-rainy-window-cloudy-day_53876-153383.jpg?size=626&ext=jpg",
    "thunderstorm": "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853306.jpg?size=626&ext=jpg",
    "snow": "https://img.freepik.com/free-photo/3d-render-defocussed-snowy-tree-landscape_1048-14924.jpg?w=996&t=st=1679431346~exp=1679431946~hmac=0b1f84d1d0a1463456677e03bb86dbc1be21c8387d6995da23941bb7cc9231b5",
    "light snow": "https://img.freepik.com/free-photo/3d-render-defocussed-snowy-tree-landscape_1048-14924.jpg?w=996&t=st=1679431346~exp=1679431946~hmac=0b1f84d1d0a1463456677e03bb86dbc1be21c8387d6995da23941bb7cc9231b5",
    "mist": "https://images.pexels.com/photos/4406353/pexels-photo-4406353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "smoke": "https://images.pexels.com/photos/4406353/pexels-photo-4406353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "haze": "https://images.pexels.com/photos/4406353/pexels-photo-4406353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const weatherDescription = weatherData.weather[0].description;
  const backgroundImageUrl = weatherBackgrounds[weatherDescription];
  document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
  const iconId = weatherIcons[weatherDescription];
  const iconUrl = `https://openweathermap.org/img/w/${iconId}.png`;

  return (
    <div className="weatherAll">
      <div className="weatherData">
        <h2>
          {weatherData.name}, {weatherData.sys.country}
        </h2>
      </div>
      <div className="weatherInfo">
        <img className="weather-icon" src={iconUrl} alt="Weather Icon" />
        <p>Temperature: {weatherData.main.temp.toFixed(1)}°C</p>
        <p>Feels like: {weatherData.main.feels_like.toFixed(1)}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    </div>
  );
};

export default Weather;
