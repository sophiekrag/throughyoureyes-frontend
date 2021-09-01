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
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    const postVariant = isPageLogin ? "login" : "signup";
    event.preventDefault();
    try {
      const response = await axiosApi.post(postVariant, {
        userData: user,
      });
      console.log(response)
      if (response.status !== 200) {
        setErrorMessage(response.message);
      }
      setRedirect(response.status === 200);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  if (redirect) {
    return <Redirect to="/account" />;
  }

  return (
    <form onSubmit={handleOnSubmit}>
     {errorMessage && <p>{errorMessage}</p>}
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
          <Button type="submit">
            Submit
          </Button>
        </section>
      </FieldSet>

     
      {errorMessage &&  <Notification statusType="error">{errorMessage}</Notification> }
    </form>
   
  );
};

export default LoginSignup;
