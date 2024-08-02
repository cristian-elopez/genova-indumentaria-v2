import styled from "styled-components";

export const ContainerCheckout = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: auto;
    width: 90%;

    @media (max-width: 768px) {
		flex-direction: column;
    }
`;