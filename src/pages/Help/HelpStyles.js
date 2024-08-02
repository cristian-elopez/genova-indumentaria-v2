import styled from "styled-components"

export const HelpContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-weight: 800;
        margin: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        @media (max-width: 780px) {
            width: 50%;
        }	
    }
`;
export const PreguntasContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: auto;
    padding: 10px;
    width: 90%;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    p {
        margin: 0;
        padding: 0;
    }
`;