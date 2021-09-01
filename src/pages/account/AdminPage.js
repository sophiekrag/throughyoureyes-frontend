import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Card from "../../components/Card";
import Button from "../../components/Button";
import {
  PageHeader,
  WrapContainer,
  ContainerMain,
  LinkStyle,
} from "../../styles/AccountPages.styles";
import noImage from "../../img/noImage.jpeg";
import Notification from "../../components/Notification";

const AdminPage = () => {
  const [stories, setStories] = useState([]);
  const [child, setChild] = useState({});
  const { childId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  useEffect(() => {
    const childData = async () => {
      const getChildData = await axiosApi(`/getChild/${childId}`);
      const childData = await getChildData.data;
      setChild(childData);
      setStories(childData.stories);
    };
    return childData();
  }, [childId]);

  const deleteStory = async (storyId) => {
    try {
      const responseDelete = await axiosApi.post(`deleteStory/${storyId}`, {
        childId,
      });
      if (responseDelete.status === 200) {
        const getChildData = await axiosApi(`/getChild/${childId}`);
        const childStoryData = await getChildData.data.stories;
        setStories(childStoryData);
      }
    } catch (error) {
      setStatusType(error.response.status);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Wrapper>
    {errorMessage && (
            <Notification
              onClick={() => setErrorMessage("")}
              statusType={statusType}
            >
              {errorMessage}
            </Notification>
          )}
      <Header>
        <h1>{child.firstname} {child.lastname} Admin Page</h1>
        <br />
        <HeaderInfo>
          <h2>Info</h2>
          <strong>Id: {child._id}</strong>
          <p>
            (Give to anyone you would like to connect with {child.firstname})
          </p>
          <strong> Username: {child.username}</strong>
        </HeaderInfo>
      </Header>
      
      {stories.length === 0 && (
        <NoStoryBox>
        <p>
          There are no stories yet. Be the first to write a story and go to your{" "}
          <HomeLink to="/account">home page</HomeLink>, select {child.firstname} and
          start writing.
        </p>
        </NoStoryBox>
      )}
      
      <Container>
        {stories.length > 0 &&
          stories.map((story) => (
            <Card
              key={story._id}
              img={story.media ? story.media : noImage}
              title={story.title}
              description={story.description}
            >
              <StyledLink to={`/my-stories/details/${story._id}`}>
                Details
              </StyledLink>
              <ButtonContainer>
                <Button onClick={() => deleteStory(story._id)}>Delete</Button>
              </ButtonContainer>
            </Card>
          ))}
      </Container>
    </Wrapper>
  );
};

const Header = styled.header`
  ${PageHeader}
  width: 40%;
`;

const Container = styled.section`
  ${ContainerMain}
`;

const HeaderInfo = styled.section`
  text-align: start;
  line-height: 1.7rem;
`;

const Wrapper = styled.section`
  ${WrapContainer}
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

const NoStoryBox = styled.section`
  background-color: ${({theme}) => theme.color.mainGrey};
  color: ${({theme}) => theme.color.mainWhite};
  padding: 25px;
  width: 30%;
  font-size: 1.5rem;
`

const HomeLink = styled(Link)`
color: ${({theme}) => theme.color.mainWhite}
`
export default AdminPage;
