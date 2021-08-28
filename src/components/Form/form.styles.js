import { css } from 'styled-components';

const FormElement = css`
    width: 100%;
    color: ${({ theme }) => theme.color.text};
    border: 2px solid ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 1rem;
    padding: 1rem;
`


export {
    FormElement
}