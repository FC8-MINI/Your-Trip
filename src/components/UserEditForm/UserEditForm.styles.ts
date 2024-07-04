import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const UserEditFormContainer = styled(ContainerStyled)`
  padding-top: 14rem;
  padding-bottom: 10rem;
`;

export const UserEditFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  width: 100%;
  max-width: 40rem;
`;
