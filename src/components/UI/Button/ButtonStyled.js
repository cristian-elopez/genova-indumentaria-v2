import styled from "styled-components"

export const StyledButton = styled.button`
    border: 5px solid transparent;
    background: transparent;
    color: white;
    cursor: pointer;
    font-family: "Orbitron", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 5px 10px;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    &:hover {
        background-color: #252525;
        box-shadow: 0px 0px 10px 2px #3E3E3E;
        -webkit-box-shadow: 0px 0px 10px 2px #3E3E3E;
        -moz-box-shadow: 0px 0px 10px 2px #3E3E3E;
    }
    &:disabled {
        cursor: not-allowed;
        opacity: .5;
        transform: none;
    }
`;