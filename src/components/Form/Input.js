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
    color: #000;
    width: 60%;
    font-size: 1rem;
    border: 2px solid gray;
    border-radius: 3px;
    margin: 1rem;
    padding: 1rem;
`

export default Input;
