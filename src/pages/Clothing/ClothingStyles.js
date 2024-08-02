import styled from "styled-components"

export const ClothingContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    max-width: 1200px;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    @media (max-width: 780px) {
        width: 90%;
        flex-direction: column;
    }	
`;
export const ImageContainer = styled.div`
    width: 50%;

    img {
        width: 100%;
        max-width: 600px;
        min-width: 300px;
    }

    @media (max-width: 780px) {
        width: 90%;
    }
`;
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;

    h3 {
        font-size: 3rem;
    }
`;
export const PriceContainer = styled.p`
    font-weight: 800;
`;