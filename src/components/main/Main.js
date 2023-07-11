import React from "react";
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
`;

const Right = styled.div`
  color: #7b7c7d;
  font-size: 22px;
  background-color: #edf3f1;
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

const InBetweenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 13vw;
  margin-right: 28vw;
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
`;

const Main = () => {
  return (
    <MainContainer>
      <Left>
        <SidebarLeft />
      </Left>
      <InBetweenContainer>
        <TopBarContainer>
          <TopBar />
        </TopBarContainer>
        <div>
          <Overview style={{ marginTop: "30%" }} />
          <Weekly />
        </div>
      </InBetweenContainer>
      <Right>
        <SidebarRight />
      </Right>
    </MainContainer>
  );
};

export default Main;
