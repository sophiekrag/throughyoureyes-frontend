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

const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    background-color: orange;
    padding: 1.5rem 2rem;
    border: 2px solid gray;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2rem;
`

export default FieldSet