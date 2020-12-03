import { StyledLabel, TextLabel, StyledSelect } from './styles'

const Select = ({ children, label, required = false, firstValue, onChange, onInvalid }) => {
  return (
    <StyledLabel>
      <TextLabel>{label}{required && ' *'}</TextLabel>
      <StyledSelect required={required} onChange={onChange} onInvalid={onInvalid}>
        <option value='' selected>{firstValue}</option>
        {children}
      </StyledSelect>
    </StyledLabel>
  )
}

export default Select
