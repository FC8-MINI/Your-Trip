import Button from "@/components/Button";
import { device } from "@/styles/media";
import Link from "next/link";
import styled from "styled-components";

export const RoomList = styled.ul`
  margin-bottom: 5rem;
`;

export const RoomItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  border-radius: 1.6rem;
  background-color: var(--color-gray-hover);

  @media ${device.tablet} {
    display: block;
  }
`;

export const RoomImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 35%;
  height: 24rem;
  border-radius: 1.2rem;

  @media ${device.tablet} {
    width: 100%;
    height: 20rem;
    margin-bottom: 1.2rem;
  }
`;

export const RoomInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  flex-grow: 1;
`;

export const RoomNameText = styled.strong`
  padding-top: 1rem;
  font-size: 2.2rem;
  font-weight: 700;
`;

export const InfoWhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);

  @media ${device.mobile} {
    gap: 1.4rem;
  }
`;

export const RoomPersonText = styled.span`
  display: inline-block;
  padding-left: 0.6rem;
  margin-bottom: 0.6rem;
  font-weight: 500;
`;

export const RoomPersonExtraText = styled.p`
  padding-left: 2.2rem;
  color: var(--color-gray-darker);
  word-break: keep-all;
`;

export const RoomPriceBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media ${device.mobile} {
    flex-grow: 1;
    text-align: center;
  }
`;

export const DayPriceText = styled.span`
  padding-right: 0.6rem;
  line-height: 1.8rem;
  font-size: 1.4rem;
  color: var(--color-gray-darker);
`;

export const TotalPriceText = styled.strong`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const RoomButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media ${device.mobile} {
    justify-content: flex-start;
  }
`;

export const CartButton = styled(Button)`
  padding: 1rem;
`;

export const LinkStyled = styled(Link)`
  padding: 0.8rem 3rem;
  border-radius: 0.8rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--color-primary-hover);
  }

  @media ${device.mobile} {
    flex-grow: 1;
    text-align: center;
  }
`;
