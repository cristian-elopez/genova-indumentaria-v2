import styled from "styled-components"
import { Form as FormikForm } from 'formik'

export const EditItemContainer = styled.div`
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
        padding-bottom: 2rem;
    }
`;
export const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 1px 17px 1px rgba(0,0,0,0.37);

    @media (max-width: 780px) {
        width: 100%;
        padding-bottom: 2rem;
    }
`;
export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin: 20px 0;

    @media (max-width: 780px) {
        width: 100%;
        margin: auto;
    }
`;
export const Form = styled(FormikForm)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 780px) {
        flex-direction: column;
    }
`;
export const SubmitContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;