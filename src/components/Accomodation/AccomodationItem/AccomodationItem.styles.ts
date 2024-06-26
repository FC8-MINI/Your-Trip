import styled from "styled-components";
import { DescriptionAvailableProps } from "./AccomodationItem.types";

export const AccomodationItemStyled = styled.div`
  width: 100%;

  padding: 1.5rem;

  border-radius: 1.6rem;
`;

export const AccomodationItemImageBox = styled.div`
  position: relative;

  width: 100%;
  height: 0;

  border-radius: 1.6rem;
  border: 1px solid var(--color-gray);

  padding-bottom: 75%;

  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  margin-top: 5%;
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

  margin-top: 10%;
`;
