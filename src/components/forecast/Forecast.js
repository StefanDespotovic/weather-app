import React from "react";
import "./Forecast.css";

const Forecast = ({ forecastData }) => {
  if (!forecastData) {
    return null;
  }
  const groupedData = forecastData.list.reduce((result, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!result[date]) {
      result[date] = {
        highTemp: item.main.temp_max,
        lowTemp: item.main.temp_min,
        weather: item.weather[0].description,
      };
    } else {
      if (item.main.temp_max > result[date].highTemp) {
        result[date].highTemp = item.main.temp_max;
      }
      if (item.main.temp_min < result[date].lowTemp) {
        result[date].lowTemp = item.main.temp_min;
      }
      if (!result[date].weather.includes(item.weather[0].description)) {
        result[date].weather = ` ${item.weather[0].description}`;
      }
    }
    return result;
  }, {});

  // Then, create an array of the next five days' weather data
  const nextTwoDaysData = Object.keys(groupedData)
    .filter((date) => new Date(date) >= new Date())
    .slice(0, 2)
    .map((date) => ({
      date,
      ...groupedData[date],
    }));

  // Finally, render the next five days' weather data
  return (
    <ul>
      {nextTwoDaysData.map((item) => (
        <li key={item.date}>
          <br />
          <div>{item.date}</div>
          <div>High: {item.highTemp.toFixed(1)}°C</div>
          <div>Low: {item.lowTemp.toFixed(1)}°C</div>
          <div>Weather: {item.weather}</div>
        </li>
      ))}
    </ul>
  );
};

export default Forecast;
