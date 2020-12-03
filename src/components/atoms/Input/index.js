import { StyledLabel, TextLabel } from "./styles";

const Input = ({
  label,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
  onInput,
  onInvalid,
  pattern = false,
  maxlength,
}) => {
  return (
    <StyledLabel type={type}>
      <TextLabel>
        {label}
        {required && " *"}
      </TextLabel>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={onInput}
        onInvalid={onInvalid}
        pattern={pattern}
        maxlength={maxlength}
      />
    </StyledLabel>
  );
};

export default Input;
