import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const SignupFormContainer = styled(ContainerStyled)`
  padding-top: 4rem;
`;

export const SignupFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  width: 100%;
  max-width: 40rem;
`;

export const ToLoginText = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;
