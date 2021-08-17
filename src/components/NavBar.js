import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import axiosApi from "../utils/AxiosApi";

import Button from "./Button";

const NavBar = () => {
  const [redirect, setRedirect] = useState(false)

  const handleLogout = async (event) => {
    event.preventDefault();
    try{
      await axiosApi.post("logout")
      setRedirect(true)
    } catch(error) {
      console.log(error)
    }
  }

  if (redirect) {
    return <Redirect exact to="/" />;
  }

  return (
    <Container>
      <NavUl>
        <li>
          <StyledLink to="/account">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/create-connect">My Children</StyledLink>
        </li>
        <li>
          <StyledLink to="/my-stories">Stories</StyledLink>
        </li>
      </NavUl>
      <form onSubmit={handleLogout}>
        <Button type="submit">Logout</Button>
      </form>
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
