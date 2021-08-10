import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

import Button from "./Button";
import { handleLogout } from "../utils/auth";

const NavBar = () => {

  return (
    <NavUl>
      <li> 
      <Link/>
      </li>
      <li>
      </li>
      <li>
      </li>
      <li>
          <Button onClick={() => handleLogout()}>Logout</Button>
      </li>
    </NavUl>
  );
};

const NavUl = styled.ul`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default NavBar;
