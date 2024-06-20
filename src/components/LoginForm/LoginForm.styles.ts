import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const LoginFormContainer = styled(ContainerStyled)`
  padding-top: 4rem;
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const OAuthText = styled.span`
  display: flex;
  gap: 0.5rem;
`;

export const ToSignupText = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;
