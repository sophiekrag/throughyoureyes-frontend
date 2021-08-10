import React, { useState, useEffect } from "react";

import axiosApi from "../utils/AxiosApi";

import FieldSet from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";
import catchErrors from "../utils/catchErrors";
import { handleLogin } from "../utils/auth";

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
  const [error, setError] = useState("");

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
      setError("");
      const response = await axiosApi.post(postVariant, {
        userData: user,
      });
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

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
