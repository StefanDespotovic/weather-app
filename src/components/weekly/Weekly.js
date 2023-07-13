import React from "react";
import styled from "styled-components";
import {
  TiWeatherSunny,
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherWindy,
  TiWeatherStormy,
  TiWeatherSnow,
} from "react-icons/ti";
import { MdFoggy } from "react-icons/md";
import { FaCloudShowersHeavy } from "react-icons/fa";

const WeatherForecastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  > div {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    > div {
      width: 24%;
      margin-right: -1;
    }
  }
`;

const WeatherForecastDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 7px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 10px;
  }
`;

const WeatherForecastDayOfWeek = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const WeatherForecastIcon = styled.div`
  font-size: 32px;
  margin-bottom: 5px;
  color: #6a7ea5;
`;

const WeatherForecastTemperature = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const WeeklyText = styled.p`
  color: #49515e;
  font-size: 22px;
  font-weight: bold;
  display: block !important;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const getWeatherIcon = (conditions) => {
  switch (conditions) {
    case "Sunny":
    case "Clear":
    case "Mostly Clear":
    case "Mostly Sunny":
    case "Fair":
      return <TiWeatherSunny />;
    case "Partially cloudy":
    case "Rain, Partially cloudy":
    case "Cloudy":
    case "Mostly Cloudy":
    case "Overcast":
    case "Rain, Overcast":
      return <TiWeatherCloudy />;
    case "Partly Sunny":
    case "Partly Cloudy":
      return <TiWeatherPartlySunny />;
    case "Windy":
    case "Breezy":
      return <TiWeatherWindy />;
    case "Stormy":
    case "Thunderstorms":
    case "Severe Thunderstorms":
      return <TiWeatherStormy />;
    case "Snow":
    case "Snow Showers":
    case "Blizzard":
      return <TiWeatherSnow />;
    case "Rain":
    case "Showers":
      return <FaCloudShowersHeavy />;
    case "Hazy":
    case "Fog":
    case "Mist":
    case "Dust":
      return <MdFoggy />;

    default:
      return null;
  }
};
const Weekly = ({ weatherData }) => {
  const forecast = weatherData?.forecast || [];
  console.log("Weather forecast:", forecast);

  return (
    <>
      <WeeklyText>Forecast</WeeklyText>
      <WeatherForecastWrapper>
        {forecast.map((day, index) => (
          <WeatherForecastDay key={index}>
            <WeatherForecastDayOfWeek>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </WeatherForecastDayOfWeek>
            <WeatherForecastIcon>
              {getWeatherIcon(day.icon)}
            </WeatherForecastIcon>
            <WeatherForecastTemperature>
              {Math.round(day.minTemperature)}°C -{" "}
              {Math.round(day.maxTemperature)}°C
            </WeatherForecastTemperature>
          </WeatherForecastDay>
        ))}
      </WeatherForecastWrapper>
    </>
  );
};

export default Weekly;
