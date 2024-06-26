import styled from "styled-components";

export const PayTitle = styled.h2`
  padding: 3rem 0 2rem;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const PayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  border-radius: 1.6rem;
  box-shadow: 0 2px 16px rgb(235, 235, 235);
  margin: 2rem 0;
`;

export const PayImageWrapper = styled.div`
  overflow: hidden;
  width: 34%;
  height: 28rem;
  border-radius: 1.6rem 0 0 1.6rem;
`;

export const PayItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PayInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  position: relative;
  padding: 2.6rem 2.6rem 2.6rem 0;
`;

export const AccommodationName = styled.strong`
  display: block;
  margin-bottom: 0.4rem;
  font-size: 2.2rem;
  font-weight: 700;
`;

export const InfoText = styled.p`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-gray-darker);
`;

export const PriceText = styled.p`
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

export const CheckInOutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  & > div {
    position: relative;

    &:first-child {
      padding-right: 3rem;

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
  }

  span {
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-gray-dark);
  }
`;
