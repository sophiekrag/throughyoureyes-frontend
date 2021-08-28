import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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

const CreateConnect = () => {
  const [child, setChild] = useState(INITIAL_CHILD);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const isChild = Object.values(child).every((el) => Boolean(el));
    return setDisabled(!isChild);
  }, [child]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChild((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFindChild = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const result = await axiosApi.post("findChild", {
        id,
      });
      return setRedirect(result.status === 200);
    } catch (error) {
      console.log(error);
    } finally {
      return setLoading(false);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const result = await axiosApi.post("createchild", {
        childData: child,
      });
      return setRedirect(result.status === 200);
    } catch (error) {
      console.log(error);
    } finally {
      return setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/account" />;
  }

  return (
    <>
      <NavBar />
      <Container>
        <form onSubmit={handleFindChild}>
          <FieldSet title="Connect to child profile">
            <Input
              placeholder="Connect to child"
              name="id"
              onChange={(e) => setId(e.target.value)}
            />
            <Button disabled={id === null && "disabled"} type="submit">Connect</Button>
          </FieldSet>
        </form>
        <form onSubmit={handleOnSubmit}>
          <FieldSet title="Create child profile">
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
  width: 80%;
  margin: 0 auto;
`;
export default CreateConnect;
