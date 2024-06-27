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

const ReservationList = ({ reservations }: ReservationListProps) => {
  return (
    <ReservationHistoryList>
      {reservations.map((reservation) => (
        <ReservationHistoryItem key={reservation.id}>
          <ImageBox>
            <Image src="/images/thumb.jpg" alt={reservation.name} fill objectFit="cover" />
          </ImageBox>

          <ReservationInfoBox>
            <UseCheckText>예약 완료</UseCheckText>

            <div>
              <AccomodationNameText>{reservation.name}</AccomodationNameText>
              <RoomNameText>
                {reservation.roomName} <span>/ 1박</span>
              </RoomNameText>
            </div>

            <CheckInOutBox>
              <div>
                <span>체크인</span>
                <p>
                  {reservation.checkInDate} {reservation.checkInTime}
                </p>
              </div>

              <div>
                <span>체크아웃</span>
                <p>
                  {reservation.checkOutDate} {reservation.checkOutTime}
                </p>
              </div>
            </CheckInOutBox>

            <TotalPriceText>
              결제 금액
              <span>{reservation.price.toLocaleString()}원</span>
            </TotalPriceText>

            <LinkStyled href={`/reservation/${reservation.id}`}>예약 상세</LinkStyled>
          </ReservationInfoBox>
        </ReservationHistoryItem>
      ))}
    </ReservationHistoryList>
  );
};

export default ReservationList;
