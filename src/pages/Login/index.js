import React from "react";
import styled from "styled-components";
import {LoginForm} from '../../components/templates'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;    
    justify-content: center;
    
`

function Login() {
  return <Container>
      <LoginForm />
  </Container>;
}

export default Login;
