import React, { useState } from "react";
import Weather from "../Weather/Weather";
import Forecast from "../forecast/Forecast";
import Uvi from "../uvi/Uvi";
import Cookies from "js-cookie";
import "./WeatherSearch.css";

const WeatherSearch = () => {
  const username = Cookies.get("username");
  const [city, setCity] = useState("");
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showRefreshButton, setShowRefreshButton] = useState(false);
  const [showError, setShowError] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const [uviData, setUviData] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Validate the input to ensure it only contains letters
    const lettersOnly = /^[A-Za-z ]+$/;
    if (!city.match(lettersOnly)) {
      alert("Please enter letters only");
      return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65db83cf65e337e4782db3074f7add50&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=65db83cf65e337e4782db3074f7add50&units=metric`;

    Promise.all([fetch(weatherUrl), fetch(forecastUrl)])
      .then(([weatherResponse, forecastResponse]) => {
        if (!weatherResponse.ok) {
          throw new Error("City not found");
        }

        return Promise.all([weatherResponse.json(), forecastResponse.json()]);
      })
      .then(([weatherData, forecastData]) => {
        const { coord } = weatherData;
        const uviUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${coord.lat}&lon=${coord.lon}&appid=65db83cf65e337e4782db3074f7add50`;

        return Promise.all([weatherData, forecastData, fetch(uviUrl)]);
      })
      .then(([weatherData, forecastData, uviResponse]) => {
        if (!uviResponse.ok) {
          throw new Error("UV index data not found");
        }

        return Promise.all([weatherData, forecastData, uviResponse.json()]);
      })
      .then(([weatherData, forecastData, uviData]) => {
        setShowWeather(true);
        setShowRefreshButton(true);
        setShowError(false);
        setWeatherLoaded(true);
        setShowProgressBar(true);
        setForecastData(forecastData);
        setUviData(uviData);
        document.querySelector(".weather").classList.add("show");
        document.querySelector(".forecast").classList.add("show");
        document.querySelector(".uvi").classList.add("show");
      })
      .catch((error) => {
        setShowError(true);
      });
  };

  const handleRefresh = () => {
    setShowWeather(false);
    setShowRefreshButton(false);
    setShowError(false);
    document.querySelector(".weather").classList.remove("show");
    document.querySelector(".forecast").classList.remove("show");
    document.querySelector(".uvi").classList.remove("show");
  };

  return (
    <div className="container-width">
      <div className="weather-container">
        {username ? (
          <h2 className="paragraph">Hello {username}</h2>
        ) : (
          <p>Please enter your name</p>
        )}
        <div className="weather">
          {!showWeather && (
            <form className="cityName" onSubmit={handleSearch}>
              <label>
                Enter a city name:
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
              <button type="submit">Search</button>
            </form>
          )}
          {showWeather && (
            <>
              <Weather city={city} />
            </>
          )}
          {showRefreshButton && (
            <button onClick={handleRefresh}>Search another location</button>
          )}
          {showError && (
            <div>
              <p>City not found. Please try again.</p>
            </div>
          )}
        </div>
        <div className="forecast">
          {showWeather && (
            <>
              <Forecast forecastData={forecastData} />
            </>
          )}
        </div>
        <div className="uvi">
          {showWeather && (
            <>
              <Uvi uviData={uviData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherSearch;
