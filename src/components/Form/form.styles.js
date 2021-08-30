import { css } from "styled-components";

const FormElement = css`
  width: 100%;
  color: ${({ theme }) => theme.color.mainGreen};
  border: 2px solid ${({ theme }) => theme.color.mainGreen};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 1rem;
  padding: 1rem;
`;

export { FormElement };
