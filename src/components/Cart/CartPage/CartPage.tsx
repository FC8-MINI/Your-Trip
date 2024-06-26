"use client";

import { StyledContainer, CartTitle } from "./CartPage.styles";
import CartList from "../CartList";
import CartDetails from "../CartDetails";
import { CartPageProps } from "./CartPage.types";

const CartPage: React.FC<Partial<CartPageProps>> = ({
  initialItems = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      name: "스탠포드 호텔 제주",
      address: "제주특별자치도 서귀포시",
      checkInDate: "2024-06-17",
      checkInTime: "15:00",
      checkOutDate: "2024-06-18",
      checkOutTime: "11:00",
      roomName: "스위트",
      people: 4,
      price: 240000,
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150",
      name: "제주 T무인텔",
      address: "제주특별자치도 제주시",
      checkInDate: "2024-06-17",
      checkInTime: "21:30",
      checkOutDate: "2024-06-18",
      checkOutTime: "00:00",
      roomName: "스탠다드",
      people: 2,
      price: 40000,
    },
  ],
  roomNames = ["스위트", "스탠다드"],
  peopleOptions = [
    { value: 1, label: "1 person" },
    { value: 2, label: "2 people" },
    { value: 3, label: "3 people" },
    { value: 4, label: "4 people" },
  ],
  dateOptions = [
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
  ],
}) => {
  return (
    <StyledContainer>
      <CartTitle>장바구니</CartTitle>
      <CartList items={initialItems} roomNames={roomNames} peopleOptions={peopleOptions} dateOptions={dateOptions} />
      <CartDetails />
    </StyledContainer>
  );
};

export default CartPage;
