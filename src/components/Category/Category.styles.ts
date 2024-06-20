import styled from "styled-components";
import ButtonStyled from "../Button/Button.styles";
import { ContainerStyled } from "../Container";
import { CategoryItemProps, CategoryListProps } from "./Category.types";

export const CategoryBorder = styled.div`
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

export const CategoryContainer = styled(ContainerStyled)`
  display: flex;
`;

export const CategoryList = styled.div<CategoryListProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  overflow: hidden;

  ${({ $isOpened }) => !$isOpened && "height: 6.2rem;"}

  padding: 1rem;
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

export const CategoryToggleButton = styled(ButtonStyled)`
  flex-shrink: 0;

  width: 10.4rem;
  height: 4.2rem;

  margin: 1rem 1rem 0 1rem;
`;
