import React from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity, WiBarometer, WiDaySunny } from "react-icons/wi";
import styled from "styled-components";

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 120vh;
    width: 93%;
    position: relative;
  }
`;

const OverviewText = styled.p`
  color: #49515e;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 41vw;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const OverviewBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const OverviewBoxText = styled.p`
  color: #a1a1a1;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 40%;
  }
`;

const OverviewBoxValue = styled.p`
  color: #454e5c;
  font-size: 30px;
  margin-top: -5px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-left: 40%;
`;

const OverviewBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21vw;
  height: 13vh;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 7px;

  @media (max-width: 768px) {
    width: 32%;
    height: auto;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #6a7ea5;

  @media (max-width: 768px) {
    font-size: 40px;
    left: 5px;
  `;

const Overview = ({ weatherData }) => {
  return (
    <OverviewContainer>
      <OverviewText>Today's Overview</OverviewText>
      <OverviewBoxes>
        <OverviewBox>
          <IconContainer>
            <FaWind />
          </IconContainer>
          <OverviewBoxText>Wind Speed</OverviewBoxText>
          <OverviewBoxValue>{weatherData?.windSpeed}km/h</OverviewBoxValue>
        </OverviewBox>
        <OverviewBox>
          <IconContainer>
            <WiHumidity style={{ fontSize: "70px" }} />
          </IconContainer>
          <OverviewBoxText>Humidity</OverviewBoxText>
          <OverviewBoxValue>{weatherData?.humidity}%</OverviewBoxValue>
        </OverviewBox>
      </OverviewBoxes>
      <OverviewBoxes>
        <OverviewBox>
          <IconContainer>
            <WiBarometer style={{ fontSize: "80px", marginLeft: "-15%" }} />
          </IconContainer>
          <OverviewBoxText>Pressure</OverviewBoxText>
          <OverviewBoxValue>{weatherData?.pressure}hpa</OverviewBoxValue>
        </OverviewBox>
        <OverviewBox>
          <IconContainer>
            <WiDaySunny style={{ fontSize: "60px" }} />
          </IconContainer>
          <OverviewBoxText>UV Index</OverviewBoxText>
          <OverviewBoxValue>{weatherData?.uvIndex}</OverviewBoxValue>
        </OverviewBox>
      </OverviewBoxes>
    </OverviewContainer>
  );
};

export default Overview;
