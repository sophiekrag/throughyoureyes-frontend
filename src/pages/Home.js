import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import diary from "../img/diary.jpeg";
import Button from "../components/Button";
import LoginSignup from "./LoginSignup";

const Home = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  return (
    <>
      <Header>
        My life through your eyes
        <Img src={diary} alt="Home writing img" />
      </Header>
      <Container>
        <ContainerChild>
          <h2>Welcome to My life through your eyes</h2>

          <p>
            On this site you can start a diary for your child. Write a story
            about your childs day and add a nice picture with it. Not with your
            child today? Ask the childs grandparents, uncles, aunts, babysitters
            or whoever spend the day with your child to write a story for them.
            This way you will have all the memories in one place.
          </p>

          <h4>Child login</h4>
          <p>
            Did someone already made memories for you? Login{" "}
            <Link to="/child/login">here</Link> and start reading!
          </p>
        </ContainerChild>
        <ContainerChild>
          <LoginSignup isPageLogin={loginToggle} />
          <Button onClick={() => setLoginToggle((prevState) => !prevState)}>
            {loginToggle ? "Signup" : "Login"}
          </Button>
        </ContainerChild>
      </Container>
    </>
  );
};

const Header = styled.h1`
  font-size: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--P-dark);
`;
const Img = styled.img`
  width: 150px;
  border-radius: 50px;
`;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerChild = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* align-items: center; */}
  width: 40%;
`;

export default Home;
