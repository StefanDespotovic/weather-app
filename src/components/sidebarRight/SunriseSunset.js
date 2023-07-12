import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2vh;
`;
const HourItem = styled.div`
  background: linear-gradient(to bottom left, #5c8eda, #0a224b);
  display: flex;
  align-items: center;
  width: 20vw;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 7px;
`;

const HourTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const HourText = styled.p`
  color: white;
  margin: 0;
`;

const SunriseSunset = ({ weatherData }) => {
  return (
    <Container>
      <div>
        <p>Sunrise & Sunset</p>
        <HourItem>
          <FiSunrise style={{ marginLeft: "15px", fontSize: "2vw" }} />
          <HourTextContainer>
            <HourText style={{ color: "#7b7c7d" }}>Sunrise</HourText>
            <HourText>{weatherData?.sunriseTime}</HourText>
          </HourTextContainer>
        </HourItem>
        <HourItem>
          <FiSunset style={{ marginLeft: "15px", fontSize: "2vw" }} />
          <HourTextContainer>
            <HourText style={{ color: "#7b7c7d" }}>Sunset</HourText>
            <HourText>{weatherData?.sunsetTime}</HourText>
          </HourTextContainer>
        </HourItem>
      </div>
    </Container>
  );
};

export default SunriseSunset;
