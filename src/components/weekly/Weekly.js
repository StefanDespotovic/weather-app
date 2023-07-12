import React from "react";
import { TiWeatherSunny, TiWeatherCloudy } from "react-icons/ti";
import styled from "styled-components";

const WeatherForecastWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const WeatherForecastDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 7px;
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
`;

const Weekly = ({ weatherData }) => {
  const forecast = weatherData?.forecast || [];

  return (
    <>
      <WeeklyText>Forecast</WeeklyText>
      <WeatherForecastWrapper>
        {forecast.slice(0, 5).map((day, index) => (
          <WeatherForecastDay key={index}>
            <WeatherForecastDayOfWeek>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </WeatherForecastDayOfWeek>
            <WeatherForecastIcon>
              {day.icon === 800 ? <TiWeatherSunny /> : <TiWeatherCloudy />}
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
