import styled from "styled-components";
import { ContainerStyled } from "../Container";
import { CategoryItemProps, CategoryNavButtonProps } from "./Category.types";
import { device } from "@/styles/media";

export const CategoryContainer = styled(ContainerStyled)`
  position: relative;

  display: flex;

  margin-top: 1rem;
`;

export const CategorySwiperBox = styled.div`
  position: relative;
  z-index: 10;

  width: calc(100% - 14.4rem);
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  color: ${({ $isActive }) => ($isActive ? "var(--color-white)" : "var(--color-dark)")};
  text-align: center;

  padding: 1rem 2rem;

  border: 1px solid var(--color-gray);
  border-radius: 0.8rem;

  background-color: ${({ $isActive }) => ($isActive ? "var(--color-primary)" : "var(--color-white)")};

  cursor: pointer;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? "var(--color-primary)" : "var(--color-gray-hover)")};
  }
`;

export const CategorySwiperGradient = styled.div`
  position: absolute;
  z-index: 20;

  width: 2rem;
  height: 100%;
`;

export const CategorySwiperLeftGradient = styled(CategorySwiperGradient)`
  left: 7.2rem;

  background-image: linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0));

  @media ${device.desktop} {
    left: 11.2rem;
  }

  @media ${device.tablet} {
    left: 10.2rem;
  }

  @media ${device.mobile} {
    left: 9.2rem;
  }
`;

export const CategorySwiperRightGradient = styled(CategorySwiperGradient)`
  right: 7.2rem;

  background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff);

  @media ${device.desktop} {
    right: 11.2rem;
  }

  @media ${device.tablet} {
    right: 10.2rem;
  }

  @media ${device.mobile} {
    right: 9.2rem;
  }
`;

export const CategoryNavButton = styled.button<CategoryNavButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.2rem;
  height: 4.2rem;

  color: var(--color-dark);

  border: 1px solid var(--color-gray);
  border-radius: 50%;

  background-color: ${({ $disabled }) => ($disabled ? "var(--color-gray-hover)" : "var(--color-white)")};

  margin-left: 1.5rem;
  margin-right: 1.5rem;

  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

  &:hover {
    box-shadow: ${({ $disabled }) => ($disabled ? "none" : "rgba(0, 0, 0, 0.3) 0 0.2rem 0.8rem 0")};
  }
`;
