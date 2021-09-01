import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import axiosApi from "../../utils/AxiosApi";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import FieldSet from "../../components/Form/Fieldset";
import connect from "../../img/connect2.jpg";
import {
  BackgroudImage,
  WrapContainer,
} from "../../styles/AccountPages.styles";
import Notification from "../../components/Notification";

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
  const [childId, setChildId] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [errorMessageConnect, setErrorMessageConnect] = useState("");
  const [errorMessageCreate, setErrorMessageCreate] = useState("");
  const [statusType, setStatusType] = useState("");

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
        childId,
      });
      setLoading(false);
      setRedirect(result.status === 200);
    } catch (error) {
      setStatusType(error.response.status);
      setErrorMessageConnect(error.response.data.message);
      setLoading(false);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const result = await axiosApi.post("createchild", {
        childData: child,
      });
      setLoading(false);
      setRedirect(result.status === 200);
    } catch (error) {
      setStatusType(error.response.status);
      setErrorMessageCreate(error.response.data.message);
      setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/account" />;
  }

  return (
    <>
      <Img src={connect} alt="children" />
      <Wrapper>
        <ConnectContainer>
          <form onSubmit={handleFindChild}>
            <FieldSet title="Connect to child profile">
              {errorMessageConnect && (
                <Notification
                  onClick={() => setErrorMessageConnect("")}
                  statusType={statusType}
                >
                  {errorMessageConnect}
                </Notification>
              )}
              <Input
                placeholder="Connect to child"
                name="id"
                onChange={(e) => setChildId(e.target.value)}
              />
              <Button disabled={childId === null && "disabled"} type="submit">
                Connect
              </Button>
            </FieldSet>
          </form>
        </ConnectContainer>
        <CreateContainer>
          <form onSubmit={handleOnSubmit}>
            <FieldSet title="Create child profile">
              {errorMessageCreate && (
                <Notification
                  onClick={() => setErrorMessageCreate("")}
                  statusType={statusType}
                >
                  {errorMessageCreate}
                </Notification>
              )}
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
        </CreateContainer>
      </Wrapper>
    </>
  );
};

const Img = styled.img`
  ${BackgroudImage}
`;

const Wrapper = styled.section`
  ${WrapContainer}
  width: 75%;
  margin: 0 auto;
  margin-top: 40px;
`;

const ConnectContainer = styled.section`
  width: 60%;
  margin-bottom: 100px;
  float: right;
`;

const CreateContainer = styled.section`
  width: 60%;
`;
export default CreateConnect;
