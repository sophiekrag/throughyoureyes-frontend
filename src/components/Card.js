import React from "react";
import styled, { css } from "styled-components";

const Card = ({ img, title = "", creator, description, children }) => {
  return (
    <CardContainer>
      {img && <CardImg src={img} alt={title} />}
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardText>{description}</CardText>}
      {creator && <CardCreator>{creator}</CardCreator>}
      <ButtonContainer>{children}</ButtonContainer>
    </CardContainer>
  );
};

const CardContainer = styled.section`
  width: 30%;
  margin: 10px;
  padding: 5px;
  border: 4px solid gray;
`;

const ButtonContainer = styled.section`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const textStyle = css`
  margin: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardTitle = styled.h2(textStyle);
const CardText = styled.p(textStyle);

const CardCreator = styled.p`
  color: gray;
  font-size: 0.8rem;
  ${textStyle}
`;

export default Card;
