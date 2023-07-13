import React, { useState } from "react";
import styled from "styled-components";
import SidebarLeft from "../sidebarLeft/SidebarLeft";
import SidebarRight from "../sidebarRight/SidebarRight";
import TopBar from "../topbar/Topbar";
import Weekly from "../weekly/Weekly";
import Overview from "../overview/Overview";

const MainContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 5vh;

  @media (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    margin-top: 0;
    max-width: 768px;
    overflow-x: hidden;
  }
`;

const Left = styled.div`
  color: #7b7c7d;
  font-size: 22px;
  background-color: #edf3f1;
  height: 100vh;
  width: 13vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  z-index: 2;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 80vw;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    background-color: none;
  }
`;

const Right = styled.div`
  color: #7b7c7d;
  font-size: 22px;
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
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 100vw;
    height: 100vh;
    border-right: none;
    border-bottom: 1px solid #e6e6e6;
    bottom: 0;
    top: initial;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    margin-top: 35vh;
  }
`;

const InBetweenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 13vw;
  margin-right: 28vw;

  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    height: auto;
    margin-top: 20vh;
    margin-left: 0;
  }
`;

const TopBarContainer = styled.div`
  width: 56.5vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  color: #7b7c7d;
  z-index: 1;

  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const Main = ({ onSearch }) => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <MainContainer>
      <Left>
        <SidebarLeft />
      </Left>
      <InBetweenContainer>
        <TopBarContainer>
          <TopBar onSearch={handleSearch} />
        </TopBarContainer>
        <div>
          <Overview style={{ marginTop: "30%" }} weatherData={weatherData} />
          <Weekly weatherData={weatherData} />
        </div>
      </InBetweenContainer>
      <Right>
        <SidebarRight weatherData={weatherData} />
      </Right>
    </MainContainer>
  );
};

export default Main;
