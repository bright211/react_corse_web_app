import styled from 'styled-components'

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 500px;
  margin: 20px 0 0 0;
`

export const TextLabel = styled.span`
  display: block;
  margin: 0 0 16px 0;
`

export const StyledSelect = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundInput};
//   background: url('/icons/arrowDown.svg');
  background-repeat: no-repeat;
  background-position: calc(100% - 20px) center;
  height: 50px;
  font-size: 16px;
  padding: 0 52px 0 20px;
  border: 1px solid ${({ theme }) => theme.backgroundLineProgress};
  border-radius: 5px;
  appearance: none;

  &:focus{
    border: 1px solid ${({ theme }) => theme.text};
  }
`
