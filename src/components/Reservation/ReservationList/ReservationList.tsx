import { calculateNight, formatTime } from "@/utils/time";
import {
  ReservationHistoryList,
  ReservationHistoryItem,
  ImageBox,
  ReservationInfoBox,
  UseCheckText,
  AccomodationNameText,
  RoomNameText,
  CheckInOutBox,
  LinkStyled,
  TotalPriceText,
} from "./ReservationList.styles";
import { ReservationListProps } from "./ReservationList.types";
import Image from "next/image";

const ReservationList = ({ reservationItems }: ReservationListProps) => {
  return (
    <ReservationHistoryList>
      {reservationItems.map((reservationItem) => (
        <ReservationHistoryItem key={reservationItem.reservationId}>
          <ImageBox>
            <Image src="/images/thumb.jpg" alt={reservationItem.accomodationName} fill objectFit="cover" />
          </ImageBox>

          <ReservationInfoBox>
            <UseCheckText>예약 완료</UseCheckText>

            <div>
              <AccomodationNameText>{reservationItem.accomodationName}</AccomodationNameText>
              <RoomNameText>
                {reservationItem.roomName}
                <span> &middot; {calculateNight(reservationItem.checkIn, reservationItem.checkOut)}박</span>
              </RoomNameText>
            </div>

            <CheckInOutBox>
              <div>
                <span>체크인</span>
                <p>{formatTime(reservationItem.checkIn, "YYYY년 MM월 DD일 HH:MM")}</p>
              </div>

              <div>
                <span>체크아웃</span>
                <p>{formatTime(reservationItem.checkOut, "YYYY년 MM월 DD일 HH:MM")}</p>
              </div>
            </CheckInOutBox>

            <TotalPriceText>
              결제 금액
              <span>{reservationItem.totalPrice.toLocaleString()}원</span>
            </TotalPriceText>

            <LinkStyled href={`/reservation/${reservationItem.reservationId}`}>예약 상세</LinkStyled>
          </ReservationInfoBox>
        </ReservationHistoryItem>
      ))}
    </ReservationHistoryList>
  );
};

export default ReservationList;
