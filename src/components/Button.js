import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, type = "button" }) => {
  return (
    <MainButton onClick={onClick} type={type}>
      {children}
    </MainButton>
  );
};

const MainButton = styled.button`
  color: white;
  background-color: gray;
  border-radius: 4px;
  font-size: 1em;
  padding: 1em;
  margin: 1em;
  border: none;
  box-shadow: 10px 0px 14px -7px black;
  &:hover {
    color: gray;
    background-color: white;
  }
`;

export default Button;
