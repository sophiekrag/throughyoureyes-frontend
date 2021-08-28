import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import axiosApi from "../utils/AxiosApi";

import Button from "./Button";

const NavBar = () => {
  const [redirect, setRedirect] = useState(false);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axiosApi.post("logout");
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };

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
          <StyledLink to="/create-connect">
            Create / Connect to child profile
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/my-stories">My stories</StyledLink>
        </li>
      </NavUl>
      <form onSubmit={handleLogout}>
        <Button type="submit" btnType="secondary">Logout</Button>
      </form>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 5px solid ${({ theme}) => theme.color.secondary};
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
  padding: 25px;
  color: ${({ theme }) => theme.color.text};
  transition: background-color ease-in 0.15s;
  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

export default NavBar;
