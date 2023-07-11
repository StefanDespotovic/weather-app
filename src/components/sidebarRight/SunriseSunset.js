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

const SunriseSunset = ({ currentTime }) => {
  return (
    <Container>
      <div>
        <p>Sunrise & Sunset</p>
        <HourItem>
          <FiSunrise style={{ marginLeft: "15px", fontSize: "2vw" }} />
          <HourTextContainer>
            <HourText style={{ color: "#7b7c7d" }}>Sunrise</HourText>
            <HourText>7:00 AM</HourText>
          </HourTextContainer>
        </HourItem>
        <HourItem>
          <FiSunset style={{ marginLeft: "15px", fontSize: "2vw" }} />
          <HourTextContainer>
            <HourText style={{ color: "#7b7c7d" }}>Sunset</HourText>
            <HourText>8:45 PM</HourText>
          </HourTextContainer>
        </HourItem>
      </div>
    </Container>
  );
};

export default SunriseSunset;
