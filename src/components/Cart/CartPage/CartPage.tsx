"use client";

import { StyledContainer, CartTitle } from "./CartPage.styles";
import CartList from "../CartList";
import { CartPageProps } from "./CartPage.types";

const defaultInitialItems = [
  {
    id: "1",
    imageUrl: "https://via.placeholder.com/150",
    name: "스탠포드 호텔 제주",
    address: "제주특별자치도 서귀포시",
    checkIn: "2024-06-17T15:00",
    checkOut: "2024-06-18T11:00",
    roomName: "스위트",
    peopleNumber: 4,
    price: 240000,
  },
  {
    id: "2",
    imageUrl: "https://via.placeholder.com/150",
    name: "제주 T무인텔",
    address: "제주특별자치도 제주시",
    checkIn: "2024-06-17T21:30",
    checkOut: "2024-06-18T00:00",
    roomName: "스탠다드",
    peopleNumber: 2,
    price: 40000,
  },
];

const defaultRoomNames = ["스위트", "스탠다드"];

const CartPage = ({
  initialItems = defaultInitialItems, // 기본값 설정
  roomNames = defaultRoomNames, // 기본값 설정
}: CartPageProps) => {
  return (
    <StyledContainer>
      <CartTitle>장바구니</CartTitle>
      <CartList items={initialItems} roomNames={roomNames} />
    </StyledContainer>
  );
};

export default CartPage;
