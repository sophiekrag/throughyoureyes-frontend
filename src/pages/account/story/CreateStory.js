import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

import axiosApi from "../../../utils/AxiosApi";
import NavBar from "../../../components/NavBar";
import FieldSet from "../../../components/Form/Fieldset";
import Input from "../../../components/Form/Input";
import Textarea from "../../../components/Form/TextArea";
import Button from "../../../components/Button";

const INITIAL_STORY = {
  title: "",
  media: "",
  description: "",
};

const CreateStory = () => {
  const [story, setStory] = useState(INITIAL_STORY);
  const [child, setChild] = useState();
  const [mediaPreview, setMediaPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { childId } = useParams();

  useEffect(() => {
    const childData = async () => {
      const response = await axiosApi(`/getChild/${childId}`);
      const childData = await response.data;
      setChild(childData);
    };
    childData();
  }, [childId]);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "media") {
      setStory((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setStory((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", story.media);
    data.append("upload_preset", "idnmaxun");
    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      data
    );
    const mediaUrl = await response.data.url;
    story.media = mediaUrl;
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      story.media && (await handleImageUpload());
      await axiosApi.post("createStory", {
        storyData: story,
        childId,
      });
      setRedirect(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/my-stories" />;
  }

  if (!child) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleOnSubmit}>
        <FieldSet title="Create Story for">
          <h1>{child.firstname}</h1>
          <InputContainer>
            <Input
              placeholder="Title"
              name="title"
              required="required"
              onChange={handleChange}
            />
            <Input
              placeholder="Image"
              name="media"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </InputContainer>
          {mediaPreview && <img src={mediaPreview} alt="Media preview" />}
          <Textarea
            placeholder="Your story"
            name="description"
            required="required"
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button disabled={loading} type="submit">
              Submit
            </Button>
          </ButtonContainer>
        </FieldSet>
      </form>
    </>
  );
};

const InputContainer = styled.section`
  width: 80%;
`;

const ButtonContainer = styled.section`
  width: 50%;
`;

export default CreateStory;
