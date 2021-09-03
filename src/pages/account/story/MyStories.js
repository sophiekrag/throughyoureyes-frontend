import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosApi from "../../../utils/AxiosApi";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import library from "../../../img/library.jpg";
import {
  BackgroudImage,
  WrapContainer,
  PageHeader,
  ContainerMain,
  LinkStyle,
} from "../../../styles/AccountPages.styles";
import noImage from "../../../img/noImage.jpeg";

const MyStories = () => {
  const [myStories, setMyStories] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const myStoriesResult = await axiosApi("myStories");
    const user = await myStoriesResult.data;
    setUser(user);
    setMyStories(myStoriesResult.data.stories);
  };

  const deleteStory = async (storyId) => {
    const answer = window.confirm("Are you sure you want to delete this memory?");
    if (answer) {
      try {
        const responseDelete = await axiosApi.post(`deleteStory/${storyId}`);
        if (responseDelete.status === 200) {
          fetchUserData();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  return (
    <>
      <Img src={library} alt="children" />
      <Wrapper>
        <Header>
          <h1>{user.username}'s Stories</h1>
          {myStories.length === 0 ? (
            <p>
              You haven't created any stories yet, go to your{" "}
              <Link to="/account">home page</Link> and select a child you would
              like to create a story for.
            </p>
          ) : (
            <p>
              These are the stories you wrote. Check out the details or edit the
              story if you like. Not happy with you story? Just press the delete
              button.
            </p>
          )}
        </Header>
        <Main>
          {myStories.length > 0 &&
            myStories.map((story) => (
              <Card
                key={story._id}
                img={story.media ? story.media : noImage}
                title={story.title}
                description={story.description}
              >
                <StyledLink to={`/my-stories/details/${story._id}`}>
                  Details
                </StyledLink>
                <StyledLink to={`/my-stories/edit/${story._id}`}>
                  Edit
                </StyledLink>
                <ButtonContainer>
                  <Button onClick={() => deleteStory(story._id)}>Delete</Button>
                </ButtonContainer>
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

const ButtonContainer = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  justifly-items: center;
`;

export default MyStories;
