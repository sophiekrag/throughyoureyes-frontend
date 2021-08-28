import React, { useState, useEffect } from "react";

import axiosApi from "../utils/AxiosApi";
import { Redirect } from "react-router-dom";

import FieldSet from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";

const INITIAL_USER = {
  email: "",
  password: "",
};

const INIT_SIGNUP_USER = {
  username: "",
};

const LoginSignup = ({ isPageLogin = false }) => {
  const [user, setUser] = useState({
    ...INITIAL_USER,
    ...(!isPageLogin && INIT_SIGNUP_USER),
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    setDisabled(!isUser);
  }, [user]);

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
      const statusCode = await response.status;
      setRedirect(statusCode === 200);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Redirect to="/account" />;
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <FieldSet title={isPageLogin ? "Login" : "Signup"}>
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
          <Button disabled={disabled || loading} type="submit">
            Submit
          </Button>
        </section>
      </FieldSet>
    </form>
  );
};

export default LoginSignup;
