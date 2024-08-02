import styled from "styled-components"
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'
import { BiSolidTrashAlt } from "react-icons/bi";

export const InfoPrenda = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    width: 100%;
    gap: 2rem;

    img {
        width: 100px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const InfoitemContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        gap: .5rem;
    }

    @media (max-width: 768px) {
        width: 95%;
        margin: auto;
    }
`;

export const AiOutlineMinusStyled = styled(AiOutlineMinus)`
    margin: 15px auto;
    cursor: pointer;
    min-width: 20px;
`;

export const AiOutlinePlusStyled = styled(AiOutlinePlus)`
    margin: 15px auto;
    cursor: pointer;
    min-width: 20px;
`;

export const ImageContainer = styled.div`
    display: flex;
    gap: .5rem;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

export const BiSolidTrashAltStyled = styled(BiSolidTrashAlt)`
    color: white;
    margin: 15px auto;
    cursor: pointer;
    min-width: 20px;
`;