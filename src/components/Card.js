import React from "react";
import styled from "styled-components";

import Button from "../components/Button";

const Card = ({ img, title, text, creator, buttonText, onClick }) => {
  return (
    <CardContainer>
      {img && <CardImg src={img} alt={title} />}
      {title && <CardTitle>{title}</CardTitle>}
      {text && <CardText>{text}</CardText>}
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

const CardTitle = styled.h2`
  margin: 10px;
  padding: 10px;
`;
const CardText = styled.p`
  margin: 10px;
  padding: 10px;
`;

const CardCreator = styled.p`
  color: gray;
  font-size: 0.8rem;
  margin: 10px;
  padding: 10px;
`;

export default Card;
