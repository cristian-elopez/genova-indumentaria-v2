import styled from 'styled-components';

export const InputBoxStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 768px) {
        width: 80%;
    }
`;
export const InputLabelStyled = styled.label`
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    width: 50%;
`;
export const InputStyled = styled.input`
    outline: none;
    border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
    height: 30px;
    padding: 0.3rem 1rem;
    color: black;
    width: 70%;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    ::placeholder {
        opacity: 60%;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;
export const ErrorMessageStyled = styled.p`
    margin: 0;
    margin-top: 5px;
    color: #fb103d;
    font-size: .7rem;
`;