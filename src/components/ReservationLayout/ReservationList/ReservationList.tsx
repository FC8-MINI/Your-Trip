import * as React from "react";
import {
  ReservationHistoryList,
  ReservationHistoryItem,
  ImageBox,
  ImageStyled,
  ReservationInfoBox,
  UseCheckText,
  AccomodationNameText,
  RoomNameText,
  CheckInOutBox,
  DateText,
  LinkStyled,
} from "./ReservationList.styles";
import { ReservationListProps } from "./ReservationList.types";

const ReservationList: React.FC<ReservationListProps> = ({ reservations }) => {
  return (
    <ReservationHistoryList>
      {reservations.map((reservation) => (
        <ReservationHistoryItem key={reservation.id}>
          <ImageBox>
            <ImageStyled src={reservation.image} width={"100%"} height={"100%"} alt="호텔 사진" />
          </ImageBox>

          <ReservationInfoBox>
            <UseCheckText>예약확정</UseCheckText>

            <div>
              <AccomodationNameText>{reservation.name}</AccomodationNameText>
              <RoomNameText>
                {reservation.roomName} / <span>1</span>박
              </RoomNameText>
            </div>

            <CheckInOutBox>
              <div>
                <span>체크인</span>
                <DateText>
                  {reservation.checkInDate} {reservation.checkInTime}
                </DateText>
              </div>

              <div>
                <span>체크아웃</span>
                <DateText>
                  {reservation.checkOutDate} {reservation.checkOutTime}
                </DateText>
              </div>
            </CheckInOutBox>

            <LinkStyled href="./">예약 상세</LinkStyled>
          </ReservationInfoBox>
        </ReservationHistoryItem>
      ))}
    </ReservationHistoryList>
  );
};

export default ReservationList;
