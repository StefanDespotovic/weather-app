import React, { useEffect, useState } from "react";
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
import ChanceOfRain from "./ChanceOfRain";
import SunriseSunset from "./SunriseSunset";
import styled from "styled-components";

const Right = styled.div`
  color: #7b7c7d;
  font-size: 22px;
  background: linear-gradient(to bottom right, #44556f, #163c7d);
  border-right: 1px solid #e6e6e6;
  height: 100vh;
  width: 28vw;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: 100vw;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e6e6e6;
    bottom: 0;
    top: 1;
  }

  @media screen and (max-width: 360px) {
    position: absolute;
    width: 100vw;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e6e6e6;
    bottom: 0;
    top: 1;
  }
`;
const TopRight = styled.div`
  display: flex;
  justifycontent: space-between;
  align-items: center;
`;
const CityName = styled.div`
  display: flex;
  flex-direction: column;
`;
const White = styled.p`
  color: white;
  text-align: left;
`;
const UnderTopRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`;

const IconContainer = styled.div`
  display: flex;
  font-size: 3rem;
  align-items: center;
  color: #818ea5;
`;

const TemperatureContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TemperatureText = styled.p`
  color: white;
  margin-right: 8px;
`;

const SunnyText = styled.p`
  color: white;
  margin-left: 8px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

const weatherIcon = (conditions) => {
  switch (conditions) {
    case "Sunny":
    case "Clear":
    case "Mostly Clear":
    case "Mostly Sunny":
    case "Fair":
      return <TiWeatherSunny />;
    case "Partially cloudy":
    case "Cloudy":
    case "Mostly Cloudy":
    case "Overcast":
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

const SidebarRight = ({ weatherData }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
      setLoading(false);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Right>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TopRight>
          <CityName>
            <White style={{ textTransform: "capitalize" }}>
              {weatherData?.locationName}
            </White>
            <p style={{ marginTop: "-15%" }}>{weatherData?.country}</p>
          </CityName>
          <White style={{ marginLeft: "5vw" }}>{currentTime}</White>
        </TopRight>
        <UnderTopRight>
          <IconContainer>
            {weatherIcon(weatherData?.weatherDescription)}
          </IconContainer>
          <TemperatureContainer>
            <White>{weatherData?.currentTemperature}</White>
            <TemperatureText>°C</TemperatureText>
            <SunnyText>{weatherData?.weatherDescription}</SunnyText>
          </TemperatureContainer>
        </UnderTopRight>
      </div>
      <Bottom>
        {!loading && (
          <ChanceOfRain currentTime={currentTime} weatherData={weatherData} />
        )}
        {!loading && (
          <SunriseSunset currentTime={currentTime} weatherData={weatherData} />
        )}
      </Bottom>
    </Right>
  );
};

export default SidebarRight;
