import styled from "styled-components"

export const CategoriasContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin: auto;
    user-select: none;
    width: 70%;

    @media (max-width: 780px) {
        width: 90%;
        flex-direction: column;
        gap: .5rem;
    }	
`;
export const CardCategoria = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    min-width: 110px;
    cursor: pointer;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    &:hover {
        background-color: #252525;
        box-shadow: 0px 0px 10px 2px #3E3E3E;
        -webkit-box-shadow: 0px 0px 10px 2px #3E3E3E;
        -moz-box-shadow: 0px 0px 10px 2px #3E3E3E;
    }
    background-color: ${({ selected }) =>
    selected ? '#3E3E3E' : 'transparent'};

    @media (max-width: 780px) {
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
    }
`;
export const CardImg = styled.img`
    width: 100%;

    @media (max-width: 780px) {
        width: 15%;
        flex-direction: row;
    }
`;