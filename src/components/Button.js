import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ onClick, type = "button", btnType = 'primary', disabled, to, children }) => {
  const isLink = to ? Link : "button";
  const tagAttr = to ? (to = { to }) : (type = { type });
  const buttonType = {
    primary: MainButton,
    secondary: SecondaryBtn,
  }

  const TransformButtonType = buttonType[btnType] || MainButton
  return (
    <TransformButtonType onClick={onClick} btntype={btnType} disabled={disabled} as={isLink} {...tagAttr}>
      {children}
    </TransformButtonType>
  );
};


const MainButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color ease-in 0.15s;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
  &:disabled {
    color: #babdbe;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.disabled};
  }
`;

const SecondaryBtn = styled(MainButton)`
  background-color: ${({ theme }) => theme.color.warning};
  &:hover {
    background-color: ${({ theme }) => theme.color.warningDark};
  }
`

export default Button;
