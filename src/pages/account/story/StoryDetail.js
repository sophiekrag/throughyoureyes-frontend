import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../../utils/AxiosApi";
import { PageHeader } from "../../../styles/AccountPages.styles";
import noImage from "../../../img/noImage.jpeg"

const StoryDetail = () => {
  const [story, setStory] = useState();

  const { storyId } = useParams();

  useEffect(() => {
    const fetchStoryData = async () => {
      const result = await axiosApi.get(`/storyDetails/${storyId}`);
      const singleStory = await result.data;
      setStory(singleStory);
    };
    return fetchStoryData();
  }, [storyId]);

  if (!story) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Header>Story written for {story.child[0].firstname}</Header>
      <Container>
        <Img src={story.media ? story.media : noImage} alt={story.title} />
        <TextContainer>
          <Title>{story.title}</Title>
          <Description>{story.description}</Description>
        </TextContainer>
      </Container>
      <StyledLink to={`/my-stories`}>Go back</StyledLink>
    </>
  );
};

const Header = styled.h1`
  ${PageHeader}
  font-size: 2rem;
  margin-bottom: 10px;
`;
const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.section`
  width: 60%;
  background-color: white;
  color: ${({ theme }) => theme.color.mainGrey};
  margin: 20px;
  padding: 20px;
  box-shadow: 1px 1px 20px 0px;
`;
const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding: 25px;
`;

const Description = styled.p`
  width: 80%;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 30%;
  height: 30%;
  margin: 20px;
`;

const StyledLink = styled(Link)`
font-size: 2rem;
padding: 0 50px 20px 0 ;
float: right;
color: ${({theme}) => theme.color.mainGreen}

`
export default StoryDetail;
