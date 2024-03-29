import React from "react";
import styled from "styled-components";
import SearchBar from "./Searchbar";

const TopBarContainer = styled.div`
  width: 50.5vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  color: #7b7c7d;

  @media (max-width: 768px) {
    position: absolute;
    width: 88vw;
    margin: 0;
    height: auto;
    flex-direction: row;
  }
`;

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrentMonthYear = styled.h1`
  margin: 0;
  color: #162334;
  font-size: 24px;
  font-weight: bold;
`;

const CurrentDate = styled.p`
  margin: 0;
  color: ##dfdfdf;
  font-size: 16px;
`;

const TopBar = ({ onSearch }) => {
  const currentDate = new Date();
  const options = {
    month: "long",
    year: "numeric",
    weekday: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const handleSearch = (data) => {
    onSearch(data);
  };

  return (
    <TopBarContainer>
      <DateTimeContainer>
        <CurrentMonthYear>
          {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </CurrentMonthYear>
        <CurrentDate>{formattedDate}</CurrentDate>
      </DateTimeContainer>
      <SearchBar onSearch={handleSearch} />
    </TopBarContainer>
  );
};

export default TopBar;
