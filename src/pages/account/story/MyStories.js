import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosApi from "../../../utils/AxiosApi";
import NavBar from "../../../components/NavBar";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);
  const [childId, setChildId] = useState();
  const [id, setId] = useState();

  useEffect(() => {
   return fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const result = await axiosApi("myStories");
    const usersStories = await result.data.stories;
    setMyStories([...usersStories]);
  };

  const deleteStory = async (event) => {
    event.preventDefault();
    if (id) {
      await axiosApi.post(`deleteStory/${id}`, { childId });
      fetchUserData();
    }
  };

  if (myStories.length === 0) {
    return (
      <>
        <NavBar />
        <p>
          You haven't created any stories yet, go to your home page and select a
          child you would like to create a story for
        </p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Container>
        {myStories.length > 0 &&
          myStories.map((story) => (
            <Card
              key={story._id}
              img={story.media}
              title={story.title}
              description={story.description}
            >
              <Link to={`/my-stories/details/${story._id}`}>Details</Link>
              <Link to={`/my-stories/edit/${story._id}`}>Edit</Link>
              <form onSubmit={deleteStory}>
                <Button
                  type="submit"
                  onClick={() => {
                    setId(story._id);
                    setChildId(story.child[0]);
                    alert("Are you sure you want to delete this story?")
                  }}
                >
                  Delete
                </Button>
              </form>
            </Card>
          ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export default MyStories;
