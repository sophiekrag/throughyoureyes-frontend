import React, { useState, useEffect } from "react";
import styled from "styled-components";

import AxioxApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await AxioxApi("myStories");
      const usersStories = await result.data.stories;
      console.log(usersStories);
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
              key={story.id}
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
