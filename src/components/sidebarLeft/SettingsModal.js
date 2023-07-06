import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    `;
const ModalContent = styled.div`
  background-color: #edf3f1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 16px;
  width: 20vw;
  min-height: 15rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: gray 1px solid;
  opacity: ${(props) => (props.show ? 1 : 0)};
  animation: ${fadeAnimation} 0.4s ease;
  p {
    color: #7b7c7d;
    margin-top: 8px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 75vw;
    padding: 1vh 3vw;
    padding-bottom: 3vh;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Modal = styled.div`
  display: relative;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const Button = styled.button`
  background-color: #194e7f;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
  display: block;
  margin: 0px auto;
  margin-top: 1vh;

  &:hover {
    background-color: #0075b9;
  }
`;

function SettingsModal({ onClose }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <ModalOverlay show={showModal}>
        <Modal>
          <ModalContent ref={modalRef} show={showModal}>
            <Title>Settings</Title>
            <p>Temperature Unit</p>
            <buttonContainer>
              <Button>°C</Button>
              <Button>°F</Button>
            </buttonContainer>
            <Button onClick={onClose}>Close</Button>
          </ModalContent>
        </Modal>
      </ModalOverlay>
    </>
  );
}

export default SettingsModal;
