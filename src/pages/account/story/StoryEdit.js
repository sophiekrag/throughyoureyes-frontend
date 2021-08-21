import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";

import axios from "axios";
import axiosApi from "../../../utils/AxiosApi";
import FieldSet from "../../../components/Form/Fieldset";
import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/TextArea";
import Button from "../../../components/Button";
import NavBar from "../../../components/NavBar";

const StoryEdit = () => {
  const [input, setInput] = useState({});
  const [story, setStory] = useState();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [mediaPreview, setMediaPreview] = useState("");

  const { storyId } = useParams();

  useEffect(() => {
    const fetchStoryData = async () => {
      const result = await axiosApi.get(`/storyDetails/${storyId}`);
      const singleStory = await result.data;
      setStory(singleStory);
    };
    fetchStoryData();
  }, [storyId]);

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", input.media);
    data.append("upload_preset", "idnmaxun");
    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      data
    );
    const mediaUrl = await response.data.url;
    input.media = mediaUrl;
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "media") {
      setInput((prevState) => ({ ...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setInput((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      input.media && (await handleImageUpload());
      await axiosApi.post("editStory", {
        storyData: input,
        storyId,
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

  if (!story) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleOnSubmit}>
        <FieldSet title="Edit Story for:">
          <h2>{story.child[0].firstname} {story.child[0].lastname}</h2>
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
            onChange={handleChange}
          />
          {mediaPreview ? (
            <img src={mediaPreview} alt="Media preview" />
          ) : (
            <img src={story.media} alt="Media preview" />
          )}
          <TextArea
            placeholder="Your story"
            name="description"
            required="required"
            defaultValue={story.description}
            onChange={handleChange}
          />
          <Button disabled={loading} type="submit">
            Submit
          </Button>
        </FieldSet>
      </form>
    </>
  );
};

export default StoryEdit;
