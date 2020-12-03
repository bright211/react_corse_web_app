import styled, { css } from 'styled-components'
import { Breakpoints } from '../../../styles'

export const StyledButton = styled.button`
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, bg = 'blue' }) => theme[bg]};
  border: 1px solid ${({ theme, bg = 'blue' }) => theme[bg]};
  color: ${({ theme, color = 'white' }) => theme[color]};
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.15s linear;
  margin: ${({ m = '0' }) => m};

  & > span {
    text-decoration: none;
  }

  &:active{
    transform: scale(.9)
  }

  ${props => props.outlined && css`
    background-color: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.blue};
    border-color: ${({ theme, border = true }) => border ? theme.blue : theme.gray};
  `}
  ${props => props.IconLeft && css`
    & span{
      margin-left: 10px;
    }
  `}

  @media (min-width: ${Breakpoints.tablet}){
    padding: 14px 12px;
  }

  @media (min-width: ${Breakpoints.desktop}){
    width: ${({ w = 'auto' }) => w};
  }
`
