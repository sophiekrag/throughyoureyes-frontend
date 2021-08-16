import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import axiosApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";
import FieldSet from "../../components/Form/Fieldset";
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/TextArea";
import Button from "../../components/Button";

const INITIAL_STORY = {
  title: "",
  media: "",
  description: "",
};
const cloudinaryUrl = "https://api.cloudinary.com/v1_1/denytmwxi/image/upload";
const preset = "reactreserve";

const CreateStory = () => {
  const [story, setStory] = useState(INITIAL_STORY);
  const [mediaPreview, setMediaPreview] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "media") {
      setStory((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setStory((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  async function handleImageUpload() {
    const data = new FormData();
    data.append("file", story.media);
    data.append("upload_preset", preset);
    const response = await axios.post(cloudinaryUrl, data);
    const mediaUrl = response.data.url;
    //const url = JSON.stringify(mediaUrl);
    return setStory((prevState) =>({...prevState, media: mediaUrl}))
  }

console.log(story)

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleImageUpload();
      console.log("Story", story)
      await axiosApi.post("createStory", {
        storyData: story,
      });
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    <Redirect to="/myStories" />;
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleOnSubmit}>
        <FieldSet title="Create Story">
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
          {mediaPreview && <img src={mediaPreview} alt="Media preview" />}
          <Textarea
            placeholder="Your story"
            name="description"
            required="required"
            onChange={handleChange}
          />
          <Button type="submit">Submit</Button>
        </FieldSet>
      </form>
    </>
  );
};

export default CreateStory;
