import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, name, type = "text", required, onChange, value}) => {
  return (
      <FormInput
        placeholder={placeholder}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        value={value}
      />
  );
};

const FormInput = styled.input`
    color: rgba(0, 0, 0);
    width: 80%;
    font-size: 1em;
    border: 2px solid gray;
    border-radius: 3px;
    margin: 1em;
    padding: 1em;
`

export default Input;
