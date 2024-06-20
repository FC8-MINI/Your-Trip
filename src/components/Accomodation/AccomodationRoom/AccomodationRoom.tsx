import * as React from "react";
import Button from "@/components/Button";
import { InfoTitleText } from "../AccomodationDetail/AccomodationDetail.styles";
import {
  RoomList,
  RoomItem,
  RoomImageBox,
  RoomImageStyled,
  RoomInfoBox,
  RoomNameText,
  InfoWhiteBox,
  RoomPersonBox,
  RoomPersonText,
  RoomPersonExtraText,
  RoomPriceBox,
  DayPriceText,
  TotalPriceText,
  RoomButtonBox,
  CartButton,
} from "./AccomodationRoom.styles";
import thumb from "/public/images/thumb.jpg";
import { RiUser3Fill, RiShoppingCart2Line } from "react-icons/ri";
import { RoomProps } from "./AccomodationRoom.types";

const rooms: RoomProps[] = [
  {
    id: 1,
    name: "슈페리어 트윈 1",
    maxPerson: 4,
    minPerson: 2,
    extraPrice: 20000,
    totalPrice: 142000,
    image: thumb,
  },
  {
    id: 2,
    name: "슈페리어 트윈 2",
    maxPerson: 4,
    minPerson: 2,
    extraPrice: 20000,
    totalPrice: 142000,
    image: thumb,
  },
  {
    id: 3,
    name: "슈페리어 트윈 3",
    maxPerson: 4,
    minPerson: 2,
    extraPrice: 20000,
    totalPrice: 142000,
    image: thumb,
  },
  {
    id: 4,
    name: "슈페리어 트윈 4",
    maxPerson: 4,
    minPerson: 2,
    extraPrice: 20000,
    totalPrice: 142000,
    image: thumb,
  },
];

const AccomodationRoom: React.FC = () => {
  return (
    <>
      <InfoTitleText>객실 선택</InfoTitleText>

      <RoomList>
        {rooms.map((room) => (
          <RoomItem key={room.id}>
            <RoomImageBox>
              <RoomImageStyled src={room.image} width={"100%"} height={"100%"} alt="호텔 사진" />
            </RoomImageBox>

            <RoomInfoBox>
              <RoomNameText>{room.name}</RoomNameText>

              <InfoWhiteBox>
                <RoomPersonBox>
                  <RiUser3Fill />
                  <RoomPersonText>
                    기준 <span>{room.minPerson}</span>인 / 최대 <span>{room.maxPerson}</span>인
                  </RoomPersonText>
                  <RoomPersonExtraText>
                    인원 추가 시 인당 <span>{room.extraPrice.toLocaleString()}</span>원 비용 추가
                  </RoomPersonExtraText>
                </RoomPersonBox>

                <RoomPriceBox>
                  <DayPriceText>1박</DayPriceText>
                  <TotalPriceText>{room.totalPrice.toLocaleString()}원</TotalPriceText>
                </RoomPriceBox>

                <RoomButtonBox>
                  <CartButton type="button">
                    <RiShoppingCart2Line />
                  </CartButton>
                  <Button type="button" $mode="primary">
                    예약하기
                  </Button>
                </RoomButtonBox>
              </InfoWhiteBox>
            </RoomInfoBox>
          </RoomItem>
        ))}
      </RoomList>
    </>
  );
};

export default AccomodationRoom;
