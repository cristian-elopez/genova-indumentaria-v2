import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
  display: flex;
  height: 250px;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  background-color: #111111;

  @media (max-width: 780px) {
    height: 350px;
  }
`;
export const FooterColumnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 200px;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const ColumnsContein = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 780px) {
    margin: auto;
  }
`;
export const TittleColumnFotter = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;
export const LinkContainerStyled = styled.div`
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
export const InfoCopyrigthStyled = styled.p`
  color: white;
  margin: auto;
  padding: 30px;
  text-align: center;
`;
export const LogoStyled = styled.img`
  width: 150px;
  padding: 10px 0;
  margin: 0;
  display: flex;
`;
