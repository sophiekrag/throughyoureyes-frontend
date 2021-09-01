import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import axiosApi from "../../../utils/AxiosApi";
import FieldSet from "../../../components/Form/Fieldset";
import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/TextArea";
import Button from "../../../components/Button";
import {
  MainContainer,
  ButtonInput,
  ImgContainer,
} from "../../../styles/CreateEditStory.styles";
import Notification from "../../../components/Notification";

const StoryEdit = () => {
  const [input, setInput] = useState({});
  const [story, setStory] = useState("");
  const [cloudinaryImg, setCloudinaryImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [mediaPreview, setMediaPreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const { storyId } = useParams();

  useEffect(() => {
    const fetchStoryData = async () => {
      const result = await axiosApi.get(`/storyDetails/${storyId}`);
      const singleStory = await result.data;
      setCloudinaryImg(singleStory.media);
      setStory(singleStory);
    };
    return fetchStoryData();
  }, [storyId]);

  const handleImageUpload = async (event) => {
    setLoading(true);
    const { files } = event.target;
    const image = files[0];

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "idnmaxun");

    setMediaPreview(window.URL.createObjectURL(image));

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      data
    );

    const mediaUrl = await response.data.url;
    setCloudinaryImg(mediaUrl);
    setLoading(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await axiosApi.post(`editStory/${storyId}`, {
        title: story.title,
        description: story.description,
        ...input,
        media: cloudinaryImg,
      });

      const statusCode = await response.status;
      setLoading(false)
      setRedirect(statusCode === 200);
    } catch (error) {
      setStatusType(error.response.status);
      setErrorMessage(error.response.data.message);
      setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/my-stories" />;
  }

  if (!story) {
    return <span>Loading...</span>;
  }

  const { firstname, lastname } = story.child[0];

  return (
    <>
      <Container>
        <form onSubmit={handleOnSubmit}>
          <FieldSet title={`Edit story for ${firstname} ${lastname}`}>
          {errorMessage && (
            <Notification
              onClick={() => setErrorMessage("")}
              statusType={statusType}
            >
              {errorMessage}
            </Notification>
          )}
            <InputContainer>
              <Input
                placeholder="Title"
                name="title"
                required="required"
                defaultValue={story.title}
                onChange={handleChange}
              />
              <Input
                placeholder="Image"
                name="media"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </InputContainer>
            <Img
              src={mediaPreview ? mediaPreview : story.media}
              alt="Media preview"
            />
            <TextArea
              placeholder="Your story"
              name="description"
              required="required"
              defaultValue={story.description}
              onChange={handleChange}
            />
            <ButtonContainer>
              <Button disabled={loading} type="submit">
                Submit
              </Button>
            </ButtonContainer>
          </FieldSet>
        </form>
      </Container>
    </>
  );
};

const Container = styled.section`
  ${MainContainer}
`;

const InputContainer = styled.section`
  ${ButtonInput}
`;

const Img = styled.img`
  ${ImgContainer}
`;

const ButtonContainer = styled.section`
  ${ButtonInput}
`;

export default StoryEdit;
