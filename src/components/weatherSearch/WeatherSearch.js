import React, { useState } from "react";
import Weather from "../Weather/Weather";
import "./WeatherSearch.css";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showRefreshButton, setShowRefreshButton] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65db83cf65e337e4782db3074f7add50&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        setShowWeather(true);
        setShowRefreshButton(true);
        setShowError(false);
        setWeatherLoaded(true); // set weatherLoaded to true
        document.querySelector(".weather").classList.add("show");
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
  };

  return (
    <div
      className="weather"
      style={{ height: weatherLoaded ? "auto" : "10vh" }}
    >
      {!showWeather && (
        <form className="cityName" onSubmit={handleSearch}>
          <label>
            <h2>Enter a city name:</h2>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      )}
      {showWeather && <Weather city={city} />}
      {showRefreshButton && <button onClick={handleRefresh}>Refresh</button>}
      {showError && (
        <div>
          <p>City not found. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
