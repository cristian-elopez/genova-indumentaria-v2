import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const RegisterContainerStyled = styled.div`
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
export const LoginLinkStyled = styled.p`
  color: ${({ theme }) => theme.text};
  &:hover {
    text-decoration: underline;
  }
`;
