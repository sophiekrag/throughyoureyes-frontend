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
  padding: 0.5rem 1.2rem;
  border: none;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

export default FieldSet;
