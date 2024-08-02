import styled from "styled-components";

export const OrdersCardsContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: .9rem;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    p {
        margin: 10px;
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin: auto;
        
        p {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media (max-width: 780px) {
            flex-wrap: wrap;
            gap: 0;
        }	
    }

    @media (max-width: 780px) {
        width: 90%;
    }	
`;