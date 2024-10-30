import styled from "styled-components";

export const ButtonSubmitStyled = styled.button`
  border: 5px solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-family: "Orbitron", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 5px 10px;
  box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    box-shadow: 0px 0px 10px 2px #3e3e3e;
    -webkit-box-shadow: 0px 0px 10px 2px #3e3e3e;
    -moz-box-shadow: 0px 0px 10px 2px #3e3e3e;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transform: none;
  }
`;
