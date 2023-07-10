import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ChanceOfRainText = styled.p`
  color: white;
  font-size: 1.2rem;
  margin: 0;
`;

const ChanceOfRainBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e6e6e6;
  border-radius: 5px;
  margin-top: 5px;
`;

const ChanceOfRainBarFill = styled.div`
  width: ${(props) => props.chanceOfRain}%;
  height: 100%;
  background-color: #44556f;
  border-radius: 5px;
`;

const ChanceOfRain = () => {
  const chanceOfRain = 30;

  return (
    <Container>
      <ChanceOfRainText>Chance of Rain</ChanceOfRainText>
      <ChanceOfRainText>{chanceOfRain}%</ChanceOfRainText>
      <ChanceOfRainBar>
        <ChanceOfRainBarFill chanceOfRain={chanceOfRain} />
      </ChanceOfRainBar>
    </Container>
  );
};

export default ChanceOfRain;
