import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const NotFoundContainer = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  word-break: keep-all;

  padding-top: 7rem;
`;

export const CodeText = styled.p`
  color: var(--color-primary);
  font-size: 13rem;
  font-weight: 700;
  line-height: 11rem;
`;

export const NotFoundText = styled.p`
  color: var(--color-primary);
  font-size: 5.5rem;
  font-weight: 500;
`;

export const DescriptionText = styled.p`
  font-size: 2rem;
  line-height: 3rem;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 2rem;
`;
