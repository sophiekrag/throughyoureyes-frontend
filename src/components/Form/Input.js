import React from "react";
import styled from "styled-components";

import { FormElement } from "./form.styles";

const Input = ({
  placeholder,
  name,
  type = "text",
  accept,
  required,
  onChange,
  ...restProps
}) => {
  return (
    <FormInput
      placeholder={placeholder}
      name={name}
      type={type}
      accept={accept}
      required={required}
      onChange={onChange}
      {...restProps}
    />
  );
};

const FormInput = styled.input`
  ${FormElement}
  font-size: 1rem;
`;

export default Input;
