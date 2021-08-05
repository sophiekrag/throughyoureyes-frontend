import React, { useState, useEffect } from "react";

import baseURL from "../utils/AxiosApi";

import FieldSet from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";
import catchErrors from "../utils/catchErrors";

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
      const response = await baseURL.post("signup", {
        userData: user
      })
      console.log("Data", response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FieldSet title="Signup">
      <form error={Boolean(error)} loading={loading} onSubmit={handleOnSubmit}>
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
      </form>
    </FieldSet>
  );
};

export default Signup;
