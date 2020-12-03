import styled from 'styled-components'

export const StyledForm = styled.form`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & label{
    display: block;
    width: 100%;
  }

  & label:first-child{
    margin-top: 0;
  }
`
