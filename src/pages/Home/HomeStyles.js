import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1700px;
`;
export const RecomendedWrapper = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 900;
  }
`;
export const GenderGeneralWrapper = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;

  h3 {
    font-weight: 800;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
export const GenderWrapper = styled.div`
  width: 50%;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.text};
  }
  img {
    width: 100%;
    box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
  }
  &:hover {
    scale: 0.998;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;
