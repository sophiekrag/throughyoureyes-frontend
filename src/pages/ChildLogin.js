import React, { useState, useEffect } from "react";

import axiosApi from "../utils/AxiosApi";

import FieldSet from "../components/Form/Fieldset";
import Input from "../components/Form/Input";
import Button from "../components/Button";

const INITIAL_CHILD = {
  username: "",
  password: "",
};

const ChildLogin = () => {
  const [child, setChild] = useState(INITIAL_CHILD);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

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
      await axiosApi.post("child/login", {
        childData: child,
      });
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <FieldSet title="Child Login">
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
  );
};

export default ChildLogin;
