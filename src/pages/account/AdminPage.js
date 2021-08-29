import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";

const AdminPage = () => {
  const [stories, setStories] = useState([]);
  const [child, setChild] = useState({});
  const [id, setId] = useState("");
  const { childId } = useParams();

  useEffect(() => {
    const childData = async () => {
      const response = await axiosApi(`/getChild/${childId}`);
      const childData = await response.data;
      const storyData = await response.data.stories;
      setChild(childData);
      setStories(storyData);
    };
    return childData();
  }, [childId]);

  const deleteStory = async (event) => {
    event.preventDefault();
    if (id) {
      await axiosApi.post(`deleteStory/${id}`, { childId });
      const response = await axiosApi(`/getChild/${childId}`);
      const storyData = await response.data.stories;
      setStories(storyData);
    }
  };

  if (stories.length === 0) {
    return (
      <>
        <NavBar />
        <p>
          There are no stories yet. Be the first to write a story and go to your{" "}
          <Link to="/account">home page</Link>, select {child.firstname} and
          start writing.
        </p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Header>
        <h1>{child.firstname}'s Stories</h1>
      </Header>
      <Container>
        {stories.length > 0 &&
          stories.map((story) => (
            <Card
              key={story._id}
              img={story.media}
              title={story.title}
              description={story.description}
            >
              <Link to={`/my-stories/details/${story._id}`}>Details</Link>
              <form onSubmit={deleteStory}>
                <Button
                  type="submit"
                  onClick={() => {
                    setId(story._id);
                    alert("Are you sure you want to delete this story?");
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

const Header = styled.header`
  text-align: center;
  font-size: 1.5rem;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;
export default AdminPage;
