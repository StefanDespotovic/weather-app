import React, { useState } from "react";
import styled from "styled-components";
import SettingsModal from "./SettingsModal";
import HelpModal from "./HelpModal";
import { useNavigate } from "react-router-dom";
import { FiSettings, FiLogOut, FiHelpCircle } from "react-icons/fi";
import logoImage from "../../icon.png";

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

const Logo = styled.img`
  width: 5vw;
  height: auto;
  margin-top: 1vh;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
`;

const Bottom = styled.div`
  margin-bottom: 5vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonText = styled.span`
  margin-left: 8px;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
`;

const Button2 = styled.button`
  position: absolute;
  font-size: 22px;
  color: #7f93d3;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #7f93d3;
    transform: translateX(-100%);
    animation: underline 2s infinite;
  }

  &:hover::after {
    animation-play-state: paused;
  }

  @keyframes underline {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const SidebarLeft = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const openSettingsModal = () => {
    setShowSettingsModal(true);
  };

  const closeSettingsModal = () => {
    setShowSettingsModal(false);
  };

  const openHelpModal = () => {
    setShowHelpModal(true);
  };

  const closeHelpModal = () => {
    setShowHelpModal(false);
  };

  return (
    <Left>
      <div>
        <CenteredContainer>
          <Logo src={logoImage} alt="Logo" />
        </CenteredContainer>
        <CenteredContainer>
          <p>Hello Test</p>
        </CenteredContainer>
        <Button onClick={openSettingsModal}>
          <ButtonContainer>
            <FiSettings />
            <ButtonText>Settings</ButtonText>
          </ButtonContainer>
        </Button>
      </div>
      <Bottom>
        <Button style={{ marginBottom: "3vh" }} onClick={handleLogout}>
          <ButtonContainer>
            <FiLogOut />
            <ButtonText>Logout</ButtonText>
          </ButtonContainer>
        </Button>
        <br />
        <Button2 onClick={openHelpModal}>
          <ButtonContainer>
            <FiHelpCircle />
            <ButtonText>Help</ButtonText>
          </ButtonContainer>
        </Button2>
      </Bottom>
      {showSettingsModal && <SettingsModal onClose={closeSettingsModal} />}
      {showHelpModal && <HelpModal onClose={closeHelpModal} />}
    </Left>
  );
};

export default SidebarLeft;
