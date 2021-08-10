import React from "react";
import styled from "styled-components";

const TextArea = ({ name, placeholder, required, onChange, value}) => {
  return (
      <FormTextArea
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
  );
};

const FormTextArea = styled.textarea`
    color: black;
    width: 60%;
    height: 25vh;
    font-size: 1rem;
    border: 2px solid gray;
    border-radius: 3px;
    margin: 1rem;
    padding: 1rem;
`

export default TextArea;
