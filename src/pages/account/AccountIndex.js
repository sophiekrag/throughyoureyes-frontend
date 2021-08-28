import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";

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
      <NavBar />

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
          <p>Pick a child profile and start creating memories</p>
        )}
      </Header>
      <Container>
        {myChildren.length > 0 &&
          myChildren.map((child) => (
            <Card
              key={child._id}
              title={child.username}
              description={`${child.firstname} ${child.lastname}`}
            >
              <ButtonContainer>
                {user._id === child.creator[0] && (
                  <Button
                    btnType="secondary"
                    to={`/child-profile/${child._id}`}
                  >
                    admin
                  </Button>
                )}
                <Button to={`/create-story/${child._id}`}>Create story</Button>
              </ButtonContainer>
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

const ButtonContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default AccountIndex;
