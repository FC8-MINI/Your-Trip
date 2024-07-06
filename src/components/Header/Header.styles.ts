import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  z-index: 1000;

  width: 100%;

  background-color: var(--color-white);

  border-bottom: 1px solid var(--color-gray);
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

export const UserNicknameText = styled.p`
  display: flex;
  align-items: center;

  font-size: 2rem;
  font-weight: 500;

  > svg {
    font-size: 2.2rem;

    margin-right: 0.3rem;
  }

  > span {
    color: var(--color-gray-dark);
    font-size: 1.8rem;

    margin-left: 0.3rem;
  }
`;
