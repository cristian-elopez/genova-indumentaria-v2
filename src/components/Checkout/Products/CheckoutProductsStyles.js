import styled from "styled-components";

export const CheckoutProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;

    @media (max-width: 768px) {
		width: 100%;
    }
`;
export const CardsWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;
export const ContainerTotalCheckout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    width: 80%;
    margin: 20px 0;
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
export const CardProductContainer = styled.div`
    width: 90%;
    min-width: 350px;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    p {
        padding: 0 10px;
    }
`;
export const ImageContainer = styled.div`
    display: flex;

    img {
        width: 30%;
    }
`;