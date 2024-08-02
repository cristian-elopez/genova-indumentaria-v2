import styled from "styled-components";
import { BiTrashAlt } from 'react-icons/bi'

export const InfoTotalCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 75%;
    margin: auto;
    gap: 20px;

    @media (max-width: 780px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }	
`;
export const ContainerInfoPrenda = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;

    @media (max-width: 780px) {
        width: 90%;
    }
`;
export const ContainerTitulosInfo = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 780px) {
        display: none;
    }
`;
export const ContainerTotalCarrito = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    width: 250px;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    h3 {
        font-weight: 800;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
`;
export const PrecioTotal = styled.p`
    font-weight: 800;
`;
export const ContainerAllProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const BiTrashStyled = styled(BiTrashAlt)`
    font-size: 1.5rem;
    color: white;
`;
export const MensajeVacio = styled.h3`
    margin: 30px auto;
`;