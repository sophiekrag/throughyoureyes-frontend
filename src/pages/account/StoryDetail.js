import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axiosApi from "../../utils/AxiosApi";

const StoryDetail = () => {
  const [story, setStory] = useState();
  const {storyId} = useParams();
  console.log(storyId)

  useEffect(() => {
    const fetchStoryData = async () => {
      const result = await axiosApi.get(`/storyDetails/${storyId}`)//Need help with getting the story with the correct ID
      const singleStory = await result.data;
      console.log(singleStory);
      setStory(singleStory);
    };
    fetchStoryData();
  }, []);

  console.log(storyId)
  return (
    <>
      <h1>Hello single Story</h1>
      {story.title}
      <img src={story.media} alt="hello" />
    </>
  );
};

export default StoryDetail;
