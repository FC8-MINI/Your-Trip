import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  border-radius: 1.6rem;
  box-shadow: 0 2px 16px rgb(235, 235, 235);
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 34%;
  height: 28rem;
  border-radius: 1.6rem 0 0 1.6rem;
  display: flex; /* 추가된 부분 */
  align-items: flex-start; /* 추가된 부분 */
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageCheckbox = styled.input`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
`;

export const ItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  position: relative;
  padding: 2.6rem 2.6rem 2.6rem 0;
`;

export const PlaceName = styled.strong`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 2.2rem;
  font-weight: 700;
`;

export const Person = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-darker);
`;

export const RoomPeriod = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-darker);
`;

export const TotalPriceText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-gray-darker);
  & > span {
    display: inline-block;
    padding-left: 0.8rem;
    font-size: 1.8rem;
    color: var(--color-black);
  }
`;

export const EditButton = styled.button`
  position: absolute;
  right: 2.6rem;
  top: 2.6rem;
  margin-right: auto;
  padding: 0.8rem 3rem;
  border-radius: 0.8rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const CheckInOutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & > div {
    position: relative;

    &:first-child {
      padding-right: 3rem;
    }

    &:first-child::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      height: 4rem;
      background-color: var(--color-gray);
    }
  }

  span {
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-gray-dark);
  }
`;
