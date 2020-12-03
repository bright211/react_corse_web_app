import styled, { css } from 'styled-components'

export const StyledLabel = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  margin: 20px 0 0 0;

  & > input {
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundInput};
    height: 50px;
    font-size: 16px;
    padding: 0 20px;
    border: 1px solid ${({ theme }) => theme.backgroundLineProgress};
    border-radius: 5px;

    &:focus{
      border: 1px solid ${({ theme }) => theme.text};
    }
  }

  ${props => props.type === 'currency' && css`
    & > input{
      padding: 0 20px 0 35px;
    }

    &:after {
      content: '$';
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30px;
      height: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
      color: ${({ theme }) => theme.text};
    }
  `}
`

export const TextLabel = styled.span`
  display: block;
  margin: 0 0 16px 0;
`
