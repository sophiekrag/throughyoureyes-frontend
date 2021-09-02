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
      await axiosApi.post("logout/child");
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
      <StyledLink to="/childProfile">Through your eyes</StyledLink>
      <StyledForm onSubmit={handleLogout}>
        <Button type="submit" btnType="secondary">
          Logout
        </Button>
      </StyledForm>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  border-bottom: 3px solid ${({ theme }) => theme.color.mainGreen};
  background: ${({ theme }) => theme.color.mainWhite};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 25px;
  color: ${({ theme }) => theme.color.mainGreen};
  transition: background-color ease-in 0.15s;
  &:hover {
    background-color: ${({ theme }) => theme.color.mainGreen};
    color: ${({ theme }) => theme.color.mainWhite};
  }
`;

const StyledForm = styled.form`
  margin-right: 25px;
  margin-bottom: 10px;
`;

export default NavBar;
