import styled from "styled-components";
import { ContainerStyled } from "../Container";
import { CategoryItemProps } from "./Category.types";

export const CategoryContainer = styled(ContainerStyled)`
  display: flex;

  margin-top: 1rem;
`;

export const CategorySwiperBox = styled.div`
  width: calc(100% - 14.4rem);
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  color: ${({ $isActive }) => ($isActive ? "var(--color-white)" : "var(--color-dark)")};
  text-align: center;

  padding: 1rem 2rem;

  border: 1px solid var(--color-gray);
  border-radius: 0.8rem;

  background-color: ${({ $isActive }) => ($isActive ? "var(--color-primary)" : "var(--color-white)")};

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "var(--color-primary)" : "var(--color-gray-hover)")};
  }
`;

export const CategoryNavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.2rem;
  height: 4.2rem;

  color: var(--color-dark);

  border: 1px solid var(--color-gray);
  border-radius: 50%;

  background-color: var(--color-white);

  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;
