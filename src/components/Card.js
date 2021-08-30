import React from "react";
import styled, { css } from "styled-components";

const Card = ({ img, title = "", creator, description, children }) => {
  return (
    <CardContainer>
      {img && (
        <ImgContainer>
          <CardImg src={img} alt={title} />
        </ImgContainer>
      )}
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
  background-color: white;
  box-shadow: 0px 6px 4px 1px #00000036;
  padding: 10px;
`;

const ButtonContainer = styled.section`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ImgContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;  
`;

const CardImg = styled.img`
  width: 50%;
  border-radius: 100px;
`;

const textStyle = css`
  color: ${({ theme }) => theme.color.mainGrey};
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardTitle = styled.h2`
  ${textStyle}
`;
const CardText = styled.p`
  ${textStyle}
`;

const CardCreator = styled.p`
  color: ${({ theme }) => theme.color.disabled};
  font-size: 0.8rem;
  ${textStyle}
`;

export default Card;
