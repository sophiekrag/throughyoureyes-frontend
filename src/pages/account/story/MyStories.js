import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosApi from "../../../utils/AxiosApi";
import NavBar from "../../../components/NavBar";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import library from "../../../img/library.jpg"
import {
  BackgroudImage,
  WrapContainer,
  PageHeader,
  ContainerMain,
  LinkStyle,
} from "../../../styles/HomeMyStories.styles";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);
  const [childId, setChildId] = useState(null);
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    return fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const result = await axiosApi("myStories");
    const user = await result.data;
    const usersStories = await result.data.stories;
    setUser(user);
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
          You haven't created any stories yet, go to your{" "}
          <Link to="/account">home page</Link> and select a child you would like
          to create a story for.
        </p>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Img src={library} alt="children" />
      <Wrapper>
        <Header>
          <h1>{user.username}'s Stories</h1>
          <p>These are the stories you wrote. Check out the details or edit the story if you like. Not happy with you story? Just press the delete button.</p>
        </Header>
        <Main>
          {myStories.length > 0 &&
            myStories.map((story) => (
              <Card
                key={story._id}
                img={story.media}
                title={story.title}
                description={story.description}
              >
                <StyledLink to={`/my-stories/details/${story._id}`}>Details</StyledLink>
                <StyledLink to={`/my-stories/edit/${story._id}`}>Edit</StyledLink>
                <form onSubmit={deleteStory}>
                  <Button
                    type="submit"
                    onClick={() => {
                      setId(story._id);
                      setChildId(story.child[0]);
                      alert("Are you sure you want to delete this story?");
                    }}
                  >
                    Delete
                  </Button>
                </form>
              </Card>
            ))}
        </Main>
      </Wrapper>
    </>
  );
};

const Img = styled.img`
  ${BackgroudImage}
`;

const Wrapper = styled.section`
  ${WrapContainer}
`;
const Header = styled.header`
  ${PageHeader}
`;

const Main = styled.section`
 ${ContainerMain}
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
`;


export default MyStories;
