import { StyledButton } from './ButtonStyled';

const Button = ({
    children,
    disabled = false,
    onClick = e => e.preventDefault()
}) => {
    return (
        <StyledButton
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button;