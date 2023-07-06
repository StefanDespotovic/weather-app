import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBarContainer = styled.div`
  width: 20vw;
  height: 20%;
  border-radius: 5px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const SearchIcon = styled(FaSearch)`
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchInput placeholder="Search location here" />
    </SearchBarContainer>
  );
};

export default SearchBar;
