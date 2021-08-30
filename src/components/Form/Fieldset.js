import React from "react";
import styled from "styled-components";

const FieldSet = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1.2rem;
  border: none;
  background: white;
  box-shadow: 4px 5px 20px 1px black;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color:  ${({ theme }) => theme.color.mainGreen};
`;

export default FieldSet;
