import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;

  width: 100%;

  background-color: var(--color-white);

  border-bottom: 1px solid var(--color-gray);
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const HeaderContainer = styled(ContainerStyled)`
  height: 7.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
