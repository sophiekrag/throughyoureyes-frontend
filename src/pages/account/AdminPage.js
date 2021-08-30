import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Card from "../../components/Card";
import Button from "../../components/Button";

const AdminPage = () => {
  const [stories, setStories] = useState([]);
  const [child, setChild] = useState({});
  const { childId } = useParams();

  useEffect(() => {
    const childData = async () => {
      const getChildData = await axiosApi(`/getChild/${childId}`);
      const childData = await getChildData.data;
      setChild(childData);
      setStories(childData.stories);
    };
    return childData();
  }, [childId]);

  const deleteStory = async (e) => {
    try {
        const responseDelete = await axiosApi.post(`deleteStory/${e}`, {
          childId,
        });
        if (responseDelete.status === 200) {
          const getChildData = await axiosApi(`/getChild/${childId}`);
          const childStoryData = await getChildData.data.stories;
          setStories(childStoryData);
        }
    } catch (error) {
      console.log(error);
    }
  };

  if (stories.length === 0) {
    return (
      <>
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
              <Button onClick={(e) => deleteStory(story._id, e)}>Delete</Button>
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
`;
export default AdminPage;
