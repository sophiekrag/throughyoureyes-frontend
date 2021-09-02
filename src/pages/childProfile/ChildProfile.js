import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axiosApi from "../../utils/AxiosApi";
import Card from "../../components/Card";
import library from "../../img/library.jpg";
import {
  BackgroudImage,
  WrapContainer,
  PageHeader,
  ContainerMain,
  LinkStyle,
} from "../../styles/AccountPages.styles";
import noImage from "../../img/noImage.jpeg";

const ChildProfile = () => {
  const [childProfileStories, setChildProfileStories] = useState([]);
  const [child, setChild] = useState("")

  const { childId } = useParams();
  
  useEffect(() => {
    const fetchUserData = async () => {
      const childProfileResult = await axiosApi(`childProfile/${childId}`);
      const childProfile = await childProfileResult.data;
      setChild(childProfile)
      setChildProfileStories(childProfile.stories);
    };
    return fetchUserData();
  }, [childId]);

  return (
    <>
      <Img src={library} alt="children" />
      <Wrapper>
        <Header>
          <h1>{child.firstname}'s Stories</h1>
          {childProfileStories.length > 0 && (
            <p>
              These are your stories. Check out the details and enjoy the memories!
            </p>
          )}
        </Header>
        <Main>
          {childProfileStories.length > 0 &&
            childProfileStories.map((story) => (
              <Card
                key={story._id}
                img={story.media ? story.media : noImage}
                title={story.title}
                description={story.description}
              >
                <StyledLink to={`/childProfile/details/${story._id}`}>
                  Details
                </StyledLink>
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

export default ChildProfile;
