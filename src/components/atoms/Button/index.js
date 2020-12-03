import { StyledButton } from './styles'

const Button = ({ children, w, outlined, IconLeft, IconRight, m, border, id, bg, color }) => {
  return (
    <StyledButton outlined={outlined} IconLeft={IconLeft} IconRight={IconRight} w={w} m={m} border={border} id={id} bg={bg} color={color}>
      {/* {IconLeft && <IconLeft />} */}
      <span>{children}</span>
      {/* {IconRight && <IconRight />} */}
    </StyledButton>
  )
}

export default Button
