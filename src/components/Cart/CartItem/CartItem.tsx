"use client";

import { useState } from "react";
import {
  ItemContainer,
  ImageWrapper,
  ItemImage,
  PlaceName,
  RoomPeriod,
  ReservationButton,
  TotalPriceText,
  ItemInfoBox,
  ImageCheckbox,
  CheckInOutBox,
  Person,
} from "./CartItem.styles";
import { CartProps } from "./CartItem.types";

// 숙박 일수 계산 함수
const calculateNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
  return Math.ceil(differenceInTime / (1000 * 3600 * 24)); // 숙박 일수 계산
};

// 날짜 및 시간 형식 변환 함수
const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("ko-KR", options).replace(", ", " ");
};

const CartItem = ({ item }: CartProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const checkIn: string = item?.checkIn ?? "";
  const checkOut: string = item?.checkOut ?? "";
  const nights = calculateNights(checkIn, checkOut); // 밤 수 계산

  return (
    <ItemContainer>
      <ImageWrapper>
        <ImageCheckbox type="checkbox" checked={isSelected} onChange={toggleSelection} />
        <ItemImage src={item?.roomImageUrls[0] ?? ""} alt={item?.accommodationName ?? "숙소 이미지"} />
      </ImageWrapper>
      <ItemInfoBox>
        <div>
          <PlaceName>{item?.accommodationName ?? "숙소 이름"}</PlaceName>
          <RoomPeriod>
            {item?.roomName ?? "방 이름"}/{nights}박
          </RoomPeriod>
          <Person>/{item?.peopleNumber ?? 0}명</Person>
        </div>
        <CheckInOutBox>
          <div>
            <span>체크인</span>
            <p>{formatDateTime(checkIn)}</p>
          </div>
          <div>
            <span>체크아웃</span>
            <p>{formatDateTime(checkOut)}</p>
          </div>
        </CheckInOutBox>
        <TotalPriceText>
          결제금액
          <span>{item?.totalPrice?.toLocaleString() ?? 0}원</span>
        </TotalPriceText>
        <ReservationButton href={`/pay/${item.reservationId}`}>예약</ReservationButton>
      </ItemInfoBox>
    </ItemContainer>
  );
};

export default CartItem;
