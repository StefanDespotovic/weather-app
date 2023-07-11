import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
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

const SidebarRight = () => {
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
            <White>City name</White>
            <p style={{ marginTop: "-25%" }}>Country</p>
          </CityName>
          <White style={{ marginLeft: "5vw" }}>{currentTime}</White>
        </TopRight>
        <UnderTopRight>
          <IconContainer>
            <MdOutlineWbSunny />
          </IconContainer>
          <TemperatureContainer>
            <White>20</White>
            <TemperatureText>°C</TemperatureText>
            <SunnyText>Sunny day</SunnyText>
          </TemperatureContainer>
        </UnderTopRight>
      </div>
      <Bottom>
        {!loading && <ChanceOfRain currentTime={currentTime} />}
        {!loading && <SunriseSunset currentTime={currentTime} />}
      </Bottom>
    </Right>
  );
};

export default SidebarRight;
