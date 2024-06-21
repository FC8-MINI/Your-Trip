import * as React from "react";
import Container from "../Container";
import { TitleText } from "./Reservation.styles";
import thumb from "/public/images/thumb.jpg";
import ReservationList, { ReservationProps } from "./ReservationList";

export const reservations: ReservationProps[] = [
  {
    id: 1,
    image: thumb,
    name: "세인트존스 호텔 1",
    roomName: "디럭스 트윈",
    checkInDate: "2024.09.05 (목)",
    checkInTime: "12:00",
    checkOutDate: "2024.09.06 (금)",
    checkOutTime: "11:00",
    price: 120000,
    extraPrice: 20000,
  },
  {
    id: 2,
    image: thumb,
    name: "세인트존스 호텔 2",
    roomName: "디럭스 트윈",
    checkInDate: "2024.09.05 (목)",
    checkInTime: "12:00",
    checkOutDate: "2024.09.06 (금)",
    checkOutTime: "11:00",
    price: 240000,
    extraPrice: 10000,
  },
  {
    id: 3,
    image: thumb,
    name: "세인트존스 호텔 3",
    roomName: "디럭스 트윈",
    checkInDate: "2024.09.05 (목)",
    checkInTime: "12:00",
    checkOutDate: "2024.09.06 (금)",
    checkOutTime: "11:00",
    price: 270000,
    extraPrice: 20000,
  },
  {
    id: 4,
    image: thumb,
    name: "세인트존스 호텔 4",
    roomName: "디럭스 트윈",
    checkInDate: "2024.09.05 (목)",
    checkInTime: "12:00",
    checkOutDate: "2024.09.06 (금)",
    checkOutTime: "11:00",
    price: 300000,
    extraPrice: 10000,
  },
  {
    id: 5,
    image: thumb,
    name: "세인트존스 호텔 5",
    roomName: "디럭스 트윈",
    checkInDate: "2024.09.05 (목)",
    checkInTime: "12:00",
    checkOutDate: "2024.09.06 (금)",
    checkOutTime: "11:00",
    price: 240000,
    extraPrice: 20000,
  },
];

const Reservation: React.FC = () => {
  return (
    <Container>
      <TitleText>예약 내역</TitleText>
      <ReservationList reservations={reservations} />
    </Container>
  );
};

export default Reservation;
