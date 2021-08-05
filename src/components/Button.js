import React from "react";
import styled from "styled-components";

const Button = ({ onClick, type = "button", disabled, children }) => {
  return (
    <MainButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </MainButton>
  );
};

const MainButton = styled.button`
  color: white;
  background-color: gray;
  border-radius: 4px;
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: none;
  box-shadow: 10px 0px 14px -7px black;
  &:hover {
    color: gray;
    background-color: white;
  }
`;

export default Button;
