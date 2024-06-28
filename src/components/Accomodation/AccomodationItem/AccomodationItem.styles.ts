import styled from "styled-components";
import { DescriptionAvailableProps } from "./AccomodationItem.types";

export const AccomodationItemBox = styled.div`
  padding: 1.5rem;
`;

export const AccomodationItemStyled = styled.div`
  width: 100%;

  border-radius: 1.6rem;

  &:hover {
    .accomodation-description__image {
      transform: translateY(-1rem);

      box-shadow: rgba(0, 0, 0, 0.16) 0px 0.1rem 0.4rem;
    }

    .accomodation-description__detail {
      transform: translateY(0);

      > p {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        white-space: normal;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const AccomodationItemImageBox = styled.div`
  position: relative;

  width: 100%;
  height: 0;

  border-radius: 1.6rem;
  border: 1px solid var(--color-gray);

  padding-bottom: 56.25%;

  overflow: hidden;

  transition: transform 0.3s ease-in-out;
`;

export const Description = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  overflow: hidden;

  margin-top: 5%;
`;

export const DescriptionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;

  overflow: hidden;
`;

export const DescriptionAddress = styled.p`
  color: var(--color-gray-dark);
  font-size: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;

  overflow: hidden;

  > svg {
    transform: translateY(0.2rem);
    margin-right: 0.1rem;
  }
`;

export const DescriptionAvailable = styled.div<DescriptionAvailableProps>`
  display: flex;

  color: ${({ $available }) => ($available ? "var(--color-gray)" : "#f57373")};
`;

export const DescriptionPrice = styled.p`
  font-size: 1.8rem;
  font-weight: 600;

  margin-top: 7%;

  > span {
    font-size: 1.5rem;
    font-weight: 400;

    margin-left: 0.2rem;
  }
`;

export const DescriptionDetail = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: var(--color-white);

  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
`;

export const DescriptionDetailText = styled.p`
  font-size: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  width: 100%;
  height: 9.375rem;
`;
