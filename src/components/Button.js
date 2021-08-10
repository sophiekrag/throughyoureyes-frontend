import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Button = ({ onClick, type = "button", disabled, to, children }) => {
  const isLink = to ? Link : "button"
  const tagAttr = to ? to={to} : type={type}
  return (
    <MainButton onClick={onClick} disabled={disabled} as={isLink} {...tagAttr}>
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
  text-decoration: none;
  font-family: arial, sans-serif;
  cursor: pointer;
  &:hover {
    color: gray;
    background-color: white;
  };
  &:disabled {
    background-color: orange;
  }
`;

export default Button;
