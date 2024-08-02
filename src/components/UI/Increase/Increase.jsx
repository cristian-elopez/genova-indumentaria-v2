import { IncreaseStyled } from './IncreaseStyles';

const Increase = ({
  children,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <IncreaseStyled
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncreaseStyled>
  );
};

export default Increase;