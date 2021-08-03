import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, name, type, required, onChange, value }) => {
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

const FormInput = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`
    color: black;
    width: 80%;
    font-size: 1em;
    border: 2px solid gray;
    border-radius: 3px;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

export default Input;
