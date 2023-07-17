import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBarContainer = styled.div`
  width: 20vw;
  height: 20%;
  border-radius: 5px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 768px) {
    width: 45%;
    height: 10%;
    margin: 0;
    padding: 0 10px;
  }
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  min-height: 24px;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;
  text-transform: capitalize;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #162334;

  @media (max-width: 768px) {
    width: 28%;
    height: 10%;
    margin: 0;
    padding: 0 10px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      fetchWeatherData("sarajevo");
      setIsFirstLoad(false);
    }
  }, []);

  const fetchWeatherData = (location) => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=&contentType=json`
    )
      .then((response) => response.json())
      .then((location) => {
        console.log(location);

        const locationName = location.address;
        const country = location.timezone;
        const currentTemperature = location.currentConditions.temp;
        const currentIcon = location.currentConditions.icon;
        const weatherDescription = location.currentConditions.conditions;
        const sunriseTime = location.currentConditions.sunrise;
        const sunsetTime = location.currentConditions.sunset;
        const windSpeed = location.currentConditions.windspeed;
        const humidity = location.currentConditions.humidity;
        const pressure = location.currentConditions.pressure;
        const uvIndex = location.currentConditions.uvindex;

        const forecast = location.days.slice(1, 6).map((day) => {
          return {
            date: day.datetime,
            minTemperature: day.tempmin,
            maxTemperature: day.tempmax,
            icon: day.conditions,
          };
        });

        onSearch({
          locationName,
          country,
          currentTemperature,
          currentIcon,
          weatherDescription,
          sunriseTime,
          sunsetTime,
          windSpeed,
          humidity,
          pressure,
          uvIndex,
          forecast,
        });
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = () => {
    fetchWeatherData(location);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchInput
        placeholder="Search location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
