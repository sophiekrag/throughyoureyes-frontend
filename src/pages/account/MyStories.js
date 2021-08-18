import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await axiosApi("myStories");
      const usersStories = await result.data.stories;
      setMyStories([...usersStories]);
    };
    fetchUserData();
  }, []);

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
              <Button to={`/my-stories/${story._id}`}>Edit</Button>
              <Button>Delete</Button>
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
