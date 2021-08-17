import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../../utils/AxiosApi";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Button from "../../components/Button";

const AccountIndex = () => {
  const [myChildren, setMyChildren] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await AxiosApi("myChildren");
      const usersChildren = await result.data.children;
      setMyChildren([...usersChildren]);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        {myChildren.length > 0 &&
          myChildren.map((child) => (
            <Card
              key={child._id}
              title={child.username}
              description={`${child.firstname} ${child.lastname}`}
            >
              <Button to={`/create-story/${child._id}`}>Create story</Button>
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

export default AccountIndex;
