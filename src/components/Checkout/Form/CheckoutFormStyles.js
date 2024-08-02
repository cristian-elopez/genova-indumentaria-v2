import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";

export const CheckoutFormStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 768px) {
        align-items: center;
    }
`;
export const Formik = styled(FormikContainer)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
export const Form = styled(FormikForm)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
        margin: 1rem 0;
    }

    @media (max-width: 768px) {
        width: 100%;
		flex-direction: column;
        align-items: center;
    }
`;
