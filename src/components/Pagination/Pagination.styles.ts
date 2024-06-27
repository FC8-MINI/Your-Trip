import styled from "styled-components";
import { ContainerStyled } from "../Container";
import { PaginationItemProps } from "./Pagination.types";

export const PaginationContainer = styled(ContainerStyled)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
`;

export const PaginationItem = styled.div<PaginationItemProps>`
  color: ${({ $isActive }) => ($isActive ? "var(--color-black)" : "var(--color-gray-dark)")};
  font-size: ${({ $isActive }) => ($isActive ? "2rem" : "1.8rem")};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};

  cursor: ${({ $isLink }) => ($isLink ? "pointer" : "default")};

  &:hover {
    text-decoration: ${({ $isLink }) => ($isLink ? "underline" : "none")};
  }
`;
