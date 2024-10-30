import styled from "styled-components";

export const ProductosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;
export const ProductosCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 20%;
  min-height: 370px;
  min-width: 140px;
  box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
  -webkit-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.37);

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    box-shadow: 0px 0px 10px 2px #3e3e3e;
    -webkit-box-shadow: 0px 0px 10px 2px #3e3e3e;
    -moz-box-shadow: 0px 0px 10px 2px #3e3e3e;
    cursor: pointer;
  }
`;
export const CardImg = styled.img`
  width: 100%;
`;
export const CardText = styled.div`
  color: ${({ theme }) => theme.text};
`;
export const PriceContainer = styled.p`
  font-weight: 800;
`;
