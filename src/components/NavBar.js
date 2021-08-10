import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";
import { handleLogout } from "../utils/auth";

const NavBar = () => {
  return (
    <Container>
      <NavUl>
        <li>
          <StyledLink to="/account">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/account/children">My Children</StyledLink>
        </li>
        <li>
          <StyledLink to="/account/stories">Stories</StyledLink>
        </li>
      </NavUl>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 20px;
  margin: 0px;
  color: black;
  &:hover {
    color: white;
    background-color: grey;
  }
`;

export default NavBar;
