import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  div {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
`;

export const LoginPasswordStyled = styled.p`
  color: white;
  &:hover {
    text-decoration: underline;
  } 
`;

export const LoginEmailStyled = styled.p`
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;