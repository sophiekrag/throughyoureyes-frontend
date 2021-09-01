import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import axiosApi from "../utils/AxiosApi";
import FieldSet from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";
import Notification from "../components/Notification";

const LoginSignup = ({ isPageLogin = true }) => {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    const postVariant = isPageLogin ? "login" : "signup";
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axiosApi.post(postVariant, {
        userData: user,
      });
      setLoading(false);
      setRedirect(response.status === 200);
    } catch (error) {
      setStatusType(error.response.status);
      setErrorMessage(error.response.data.message);
      setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/account" />;
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <FieldSet title={isPageLogin ? "Login" : "Signup"}>
          {errorMessage && (
            <Notification
              onClick={() => setErrorMessage("")}
              statusType={statusType}
            >
              {errorMessage}
            </Notification>
          )}
          {!isPageLogin && (
            <Input
              placeholder="Username"
              name="username"
              required="required"
              onChange={handleChange}
            />
          )}
          <Input
            placeholder="Email"
            name="email"
            type="email"
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
            <Button disabled={loading} type="submit">
              Submit
            </Button>
          </section>
        </FieldSet>
      </form>
    </>
  );
};

export default LoginSignup;
