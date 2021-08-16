import React from "react";
import styled, { css } from "styled-components";

import Button from "../components/Button";

const Card = ({ img, title = "", creator, buttonText, onClick, children }) => {
  return (
    <CardContainer>
      {img && <CardImg src={img} alt={title} />}
      {title && <CardTitle>{title}</CardTitle>}
      {children && <CardText>{children}</CardText>}
      {creator && <CardCreator>{creator}</CardCreator>}
      {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 5px solid gray;
  margin: 10px;
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const textStyle = css`
  margin: 10px;
  padding: 10px;
`;

const CardTitle = styled.h2(textStyle);
const CardText = styled.p(textStyle);

const CardCreator = styled.p`
  color: gray;
  font-size: 0.8rem;
  ${textStyle}
`;

export default Card;
