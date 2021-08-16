import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";

const AccountIndex = () => {
  const [myChildren, setMyChildren] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await AxiosApi("myChildren");
      const usersChildren = await result.data.children;
      setMyChildren([...usersChildren]);
    };
    fetchUserData();
  }, []);

  const handleOnClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/create-story" />;
  }

  return (
    <>
      <NavBar />
      <Container>
        {myChildren.length > 0 &&
          myChildren.map((child) => (
            <Card
              key={child._id}
              title={child.username}
              onClick={handleOnClick}
              buttonText="Create story"
            >
              {child.firstname} {child.lastname}
            </Card>
          ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default AccountIndex;
