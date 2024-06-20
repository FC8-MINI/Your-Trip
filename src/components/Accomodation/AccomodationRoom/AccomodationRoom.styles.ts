import Button from "@/components/Button";
import Image from "next/image";
import styled from "styled-components";

export const RoomList = styled.ul`
  margin-bottom: 5rem;
`;

export const RoomItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-basis: 0;
  gap: 3rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;
  border-radius: 1.6rem;
  background-color: var(--color-gray-hover);
`;

export const RoomImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 35%;
  height: 24rem;
  border-radius: 1.2rem;
`;

export const RoomImageStyled = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RoomInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  flex-grow: 2;
  flex-basis: 0;
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
`;
export const RoomPersonBox = styled.div``;

export const RoomPersonText = styled.span`
  display: inline-block;
  padding-left: 0.6rem;
  margin-bottom: 0.6rem;
  font-weight: 500;
`;

export const RoomPersonExtraText = styled.p`
  padding-left: 2.2rem;
  color: var(--color-gray-darker);
`;

export const RoomPriceBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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
`;

export const CartButton = styled(Button)`
  padding: 1rem;
`;
