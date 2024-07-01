import styled from "styled-components";
import { DescriptionAvailableProps, DescriptionPriceProps, DescriptionPriceUnitProps } from "./AccomodationItem.types";

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

export const SoldOutImageCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
  font-size: 3rem;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.4);
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
  gap: 0.3rem;

  color: ${({ $available }) => ($available ? "var(--color-gray)" : "#f57373")};
`;

export const DescriptionPriceBox = styled.div`
  display: flex;
  align-items: flex-end;

  margin-top: 7%;
`;

export const SoldOutPrice = styled.span`
  color: var(--color-gray-darker);
  font-size: 2rem;
  font-weight: 600;

  margin-right: 0.5rem;
`;

export const DescriptionPrice = styled.span<DescriptionPriceProps>`
  display: flex;
  align-items: flex-end;

  color: ${({ $reservationAvailable }) =>
    $reservationAvailable ? "var(--color-gray-dark)" : "var(--color-gray-dark)"};
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: ${({ $reservationAvailable }) => ($reservationAvailable ? "none" : "line-through")};
`;

export const DescriptionPriceUnit = styled.span<DescriptionPriceUnitProps>`
  color: ${({ $reservationAvailable }) => ($reservationAvailable ? "#000" : "var(--color-gray-dark)")};
  font-size: 1.5rem;
  font-weight: 400;

  margin-left: 0.2rem;
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
