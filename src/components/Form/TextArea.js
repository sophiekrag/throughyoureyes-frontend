import React from "react";
import styled from "styled-components";

import { FormElement } from './form.styles';

const TextArea = ({ name, placeholder, required, onChange, ...restProps}) => {
  return (
      <FormTextArea
        name={name}
        rows="10"
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        {...restProps}
      />
  );
};

const FormTextArea = styled.textarea`
    ${FormElement}
    font-size: 1.3rem;
`

export default TextArea;
