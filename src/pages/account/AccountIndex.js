import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../../utils/AxiosApi";
import Card from "../../components/Card";
import Button from "../../components/Button";
import children from "../../img/children.jpg";
import admin from "../../img/admin.png";
import {
  BackgroudImage,
  WrapContainer,
  PageHeader,
  ContainerMain,
  LinkStyle,
} from "../../styles/AccountPages.styles";


const AccountIndex = () => {
  const [myChildren, setMyChildren] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      const result = await AxiosApi("myChildren");
      const user = await result.data;
      const usersChildren = await result.data.children;
      setMyChildren([...usersChildren]);
      setUser(user);
    };
    return fetchUserData();
  }, []);

  return (
    <>
      <Img src={children} alt="children" />
      <Wrapper>
        <Header>
          <h1>Welcome {user.username}</h1>
          {myChildren.length === 0 && (
            <p>
              You're not connected to a child yet. Click{" "}
              <Link to="/create-connect">here</Link> to connect to a child or
              create a child profile yourself.
            </p>
          )}
          {myChildren.length > 0 && (
            <p>Pick a child profile and start creating memories. </p>
          )}
        </Header>
        <Main>
          {myChildren.length > 0 &&
            myChildren.map((child) => (
              <Card
                key={child._id}
                title={`${child.firstname} ${child.lastname}`}
                description={child.username}
              >
                {user._id === child.creator[0] && (
                  <StyledLink to={`/child-profile/${child._id}`}>
                    admin
                    <Icon src={admin} alt="admin" />
                  </StyledLink>
                )}
                <ButtonContainer>
                  <Button to={`/create-story/${child._id}`}>
                    Create story
                  </Button>
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

const Icon = styled.img`
  width: 20%;
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

export default AccountIndex;
