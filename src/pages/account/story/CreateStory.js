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
import {
  MainContainer,
  ButtonInput,
  ImgContainer,
} from "../../../styles/CreateEditStory.styles";

const CreateStory = () => {
  const [story, setStory] = useState({});
  const [child, setChild] = useState();
  const [cloudinaryImg, setCloudinaryImg] = useState(null);
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
    return childData();
  }, [childId]);

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
    setStory((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axiosApi.post("createStory", {
        title: story.title,
        description: story.description,
        media: cloudinaryImg,
        childId,
      });
      setRedirect(response.status === 200);
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
      <Container>
        <form onSubmit={handleOnSubmit}>
          <FieldSet
            title={`Create a story for ${child.firstname} ${child.lastname}`}
          >
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
                onChange={handleImageUpload}
              />
            </InputContainer>
            {mediaPreview && <Img src={mediaPreview} alt="Media preview" />}
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

export default CreateStory;
