import * as React from "react";
import { InfoTitleText } from "../AccomodationDetail/AccomodationDetail.styles";
import {
  RoomList,
  RoomItem,
  RoomImageBox,
  RoomInfoBox,
  RoomNameText,
  InfoWhiteBox,
  RoomPersonText,
  RoomPersonExtraText,
  RoomPriceBox,
  DayPriceText,
  TotalPriceText,
  RoomButtonBox,
  CartButton,
  LinkStyled,
} from "./AccomodationRoomList.styles";
import { RiUser3Fill, RiShoppingCart2Line } from "react-icons/ri";
import { AccomodationRoomListProps } from "./AccomodationRoomList.types";
import Image from "next/image";

const AccomodationRoomList: React.FC<AccomodationRoomListProps> = ({ rooms }) => {
  return (
    <>
      <InfoTitleText>객실 선택</InfoTitleText>

      <RoomList>
        {rooms.map((room) => (
          <RoomItem key={room.id}>
            <RoomImageBox>
              <Image src="/images/thumb.jpg" fill alt={room.name} objectFit="cover" />
            </RoomImageBox>

            <RoomInfoBox>
              <RoomNameText>{room.name}</RoomNameText>

              <InfoWhiteBox>
                <div>
                  <RiUser3Fill />
                  <RoomPersonText>
                    기준 <span>{room.baseGuests}</span>인 / 최대 <span>{room.maxGuests}</span>인
                  </RoomPersonText>
                  <RoomPersonExtraText>
                    인원 추가 시 인당 <span>{room.extraPersonCharge.toLocaleString()}</span>원 비용 추가
                  </RoomPersonExtraText>
                </div>

                <RoomPriceBox>
                  <DayPriceText>1박</DayPriceText>
                  <TotalPriceText>{room.price.toLocaleString()}원</TotalPriceText>
                </RoomPriceBox>

                <RoomButtonBox>
                  <CartButton type="button">
                    <RiShoppingCart2Line />
                  </CartButton>
                  <LinkStyled href="./">객실 예약</LinkStyled>
                </RoomButtonBox>
              </InfoWhiteBox>
            </RoomInfoBox>
          </RoomItem>
        ))}
      </RoomList>
    </>
  );
};

export default AccomodationRoomList;
