import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const HourItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

const HourText = styled.p`
  color: white;
  margin: 0;
  width: 4rem;
`;

const BarContainer = styled.div`
  flex: 1;
  height: 2.4vh;
  background-color: #294364;
  border-radius: 12px;
  margin-left: 15px;
  width: 14rem;

  @media (max-width: 1500px) {
    max-width: 10rem;
    min-width: 5rem;
  }
  @media (max-width: 1050px) {
    max-width: 3rem;
  }
`;

const BarFill = styled.div`
  width: ${(props) => props.chanceOfRain}%;
  height: 100%;
  background-color: #8eb3fa;
  border-radius: 5px;
`;

const Percentages = styled.p`
  color: white;
  margin: 0;
  margin-left: 10px;
`;

const ChanceOfRain = ({ currentTime, weatherData }) => {
  const getNextHours = (currentTime) => {
    const currentHour = parseInt(currentTime.split(":")[0]);
    const nextHours = [];

    for (let i = 1; i <= 4; i++) {
      const nextHour = (currentHour + i) % 24;
      const formattedHour =
        nextHour >= 12 ? `${nextHour % 12 || 12} PM` : `${nextHour} AM`;
      nextHours.push(formattedHour);
    }

    return nextHours;
  };

  const nextHours = getNextHours(currentTime);

  const getChanceOfRain = (temperature) => {
    let chance = 0;

    if (temperature < 15) {
      chance = Math.floor(Math.random() * 31) + 50;
    } else if (temperature >= 15 && temperature < 25) {
      chance = Math.floor(Math.random() * 31) + 20;
    } else if (temperature >= 25) {
      chance = Math.floor(Math.random() * 20) + 1;
    }

    return chance;
  };
  const currentTemperature = weatherData?.currentTemperature;

  return (
    <Container>
      <div>
        <p>Chances of rain</p>
        {nextHours.map((hour, index) => {
          const temperature =
            index === 0
              ? currentTemperature
              : weatherData?.forecast[index - 1]?.maxTemperature;
          const chanceOfRain = getChanceOfRain(temperature);
          return (
            <HourItem key={hour}>
              <HourText>{hour}</HourText>
              <BarContainer>
                <BarFill chanceOfRain={chanceOfRain} />
              </BarContainer>
              <Percentages>{chanceOfRain}%</Percentages>
            </HourItem>
          );
        })}
      </div>
    </Container>
  );
};

export default ChanceOfRain;
