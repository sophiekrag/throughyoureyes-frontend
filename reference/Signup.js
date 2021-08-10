import React, { useState, useEffect } from "react";

import axiosApi from "../src/utils/AxiosApi";

import FieldSet from "../src/components/Form/Fieldset";
import Input from "../src/components/Form/Input";
import Button from "../src/components/Button";
import catchErrors from "../src/utils/catchErrors";
import { handleLogin } from "../src/utils/auth"

const INITIAL_USER = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      const response = await axiosApi.post("signup", {
        userData: user
      })
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form error={Boolean(error)} loading={loading} onSubmit={handleOnSubmit}>
      <FieldSet title="Signup">
        <Input
          placeholder="Username"
          name="username"
          required="required"
          onChange={handleChange}
        />
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

export default Signup;
