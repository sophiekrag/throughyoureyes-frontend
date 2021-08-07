import React from "react"
import styled from "styled-components"

const FieldSet = ({ title, children }) => {
 return (
     <Container>
     <Title>{title}</Title>
        {children}
     </Container>
 )
}

const Container = styled.fieldset`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem 2rem;
    border: 10px solid gray;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2rem;
`

export default FieldSet