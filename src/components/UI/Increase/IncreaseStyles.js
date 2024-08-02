import styled from 'styled-components';

export const IncreaseStyled = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  margin: auto;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;