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
`;

const SidebarLeftContainer = styled.div`
  width: 13vw;
  top: 0;
  left: 0;
  background-color: #edf3f1;
  border-right: 1px solid #e6e6e6;
  height: 100vh;
  position: fixed;
  z-index: 2;
`;

const InBetweenContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: 13vw;
  margin-right: 28vw;
  width: 100%;
  z-index: 1;
`;

const SidebarRightContainer = styled.div`
  width: 28vw;
  top: 0;
  right: 0;
  background-color: #edf3f1;
  border-left: 1px solid #e6e6e6;
  height: 100vh;
  position: fixed;
  z-index: 2;
`;

const Main = () => {
  return (
    <MainContainer>
      <SidebarLeftContainer>
        <SidebarLeft />
      </SidebarLeftContainer>
      <InBetweenContainer>
        <TopBar />
        <div>
          <Weekly />
          <Overview />
        </div>
      </InBetweenContainer>
      <SidebarRightContainer>
        <SidebarRight />
      </SidebarRightContainer>
    </MainContainer>
  );
};

export default Main;
