import React, { useState, useEffect } from "react";
import axiosApi from "../../utils/AxiosApi";

import styled from "styled-components";

import NavBar from "../../components/NavBar";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import FieldSet from "../../components/Form/Fieldset";

const INITIAL_CHILD = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
};

const Account = () => {
  const [child, setChild] = useState(INITIAL_CHILD);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null)

  useEffect(() => {
    const isChild = Object.values(child).every((el) => Boolean(el));
    setDisabled(!isChild);
  }, [child]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChild((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFindChild = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
     
      const response = await axiosApi.post("findChild", {
        id
      });
      console.log(response)
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(id)
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axiosApi.post("createchild", {
        childData: child,
      });
      console.log(response);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <Container>
        <form onSubmit={handleFindChild}>
          <Input
            placeholder="Connect to child"
            name="id"
            onChange={(e)=> setId(e.target.value)}
          />
          <Button type="submit">Connect</Button>
        </form>
        <form onSubmit={handleOnSubmit}>
          <FieldSet title="Create child">
            <Input
              placeholder="First name"
              name="firstname"
              required="required"
              onChange={handleChange}
            />
            <Input
              placeholder="Last name"
              name="lastname"
              required="required"
              onChange={handleChange}
            />
            <Input
              placeholder="Username"
              name="username"
              required="required"
              onChange={handleChange}
            />
            <Input
              placeholder="Password"
              name="password"
              type="password"
              required="required"
              onChange={handleChange}
            />
            <Button disabled={disabled || loading} type="submit">
              Submit
            </Button>
          </FieldSet>
        </form>
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
export default Account;
