import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../../utils/AxiosApi";
import Navbar from "../../../components/NavBar"

const StoryDetail = () => {
  const [story, setStory] = useState();
  const {storyId} = useParams();

  useEffect(() => {
    const fetchStoryData = async () => {
      const result = await axiosApi.get(`/storyDetails/${storyId}`)
      const singleStory = await result.data;
      setStory(singleStory);
    };
    fetchStoryData();
  }, [storyId]);

  if (!story) {
    return <span>Loading...</span>
  }
  
  return (
    <>
    <Navbar/>
    <Container>
      <h1>{story.title}</h1>
      <p>{story.description}</p> 
      <img src={story.media} alt={story.title} />
      <Link to={`/my-stories`}>Go back</Link>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 80%;
  margin: 0 auto;
`

export default StoryDetail;
