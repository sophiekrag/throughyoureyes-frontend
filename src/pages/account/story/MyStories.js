import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosApi from "../../../utils/AxiosApi";
import NavBar from "../../../components/NavBar";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);
  const [childId, setChildId] = useState(null);
  const [user, setUser] = useState(null)
  const [id, setId] = useState(null);

  useEffect(() => {
   return fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const result = await axiosApi("myStories");
    const user = await result.data
    const usersStories = await result.data.stories;
    setUser(user)
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
          You haven't created any stories yet, go to your <Link to="/account">home page</Link> and select a
          child you would like to create a story for.
        </p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Header>
      <h1>{user.username}'s Stories</h1>
      <h2>These are the stories you wrote:</h2>
      </Header>
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
const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
`
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export default MyStories;
