import styled from "styled-components";
import { DescriptionAvailableProps } from "./AccomodationItem.types";

export const AccomodationItemStyled = styled.div`
  width: 29.1rem;
  height: 35rem;

  padding: 1.5rem;

  border: 1px solid var(--color-gray);
  border-radius: 1.6rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  margin-top: 2rem;
`;

export const DescriptionCategory = styled.p`
  color: var(--color-gray-dark);
  font-size: 1.4rem;
`;

export const DescriptionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const DescriptionAddress = styled.p`
  color: var(--color-gray-dark);
  font-size: 1.4rem;
`;

export const DescriptionAvailable = styled.div<DescriptionAvailableProps>`
  display: flex;

  color: ${({ $available }) => ($available ? "var(--color-gray)" : "#f57373")};
`;

export const DescriptionPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 600;

  margin-top: 3.5rem;
`;
