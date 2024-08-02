import styled from "styled-components";

export const UserActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    width: 100%;
`;
export const ActionsUserStyled = styled.p`
  color: white;
  &:hover {
    text-decoration: underline;
  } 
`;