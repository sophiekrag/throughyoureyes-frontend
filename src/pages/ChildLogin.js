import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../utils/AxiosApi";
import FieldSet from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";
import Notification from "../components/Notification";

const INITIAL_CHILD = {
  username: "",
  password: "",
};

const ChildLogin = () => {
  const [child, setChild] = useState(INITIAL_CHILD);
  const [redirect, setRedirect] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  useEffect(() => {
    const isChild = Object.values(child).every((el) => Boolean(el));
    return setDisabled(!isChild);
  }, [child]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChild((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axiosApi.post("child/login", {
        childData: child,
      });
      setRedirect(response.status === 200);
    } catch (error) {
      setStatusType(error.response.status);
      setErrorMessage(error.response.data.message);
      setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to={`/childProfile`} />;
  }

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <FieldSet title="Child Login">
          {errorMessage && (
            <Notification
              onClick={() => setErrorMessage("")}
              statusType={statusType}
            >
              {errorMessage}
            </Notification>
          )}
          <Input
            placeholder="Username"
            name="username"
            type="username"
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
          <section>
            <Button disabled={disabled || loading} type="submit">
              Submit
            </Button>
          </section>
        </FieldSet>
      </form>
    </Container>
  );
};

const Container = styled.section`
width: 80%;
padding: 75px;
margin: 0 auto;
`

export default ChildLogin;
