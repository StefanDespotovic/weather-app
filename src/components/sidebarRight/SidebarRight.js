import React from "react";
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

const SidebarRight = () => {
  return <Right></Right>;
};

export default SidebarRight;
