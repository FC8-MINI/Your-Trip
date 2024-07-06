import Container from "@/components/Container";
import {
  DetailBox,
  TitleText,
  ImageBox,
  InfoBox,
  NameText,
  InfoDl,
  InfoDt,
  InfoDd,
  ReservationDetailProps,
} from "@/components/Reservation/ReservationDetail";
import { calculateNight, formatTime } from "@/utils/time";
import Image from "next/image";

const ReservationDetail = ({
  accomodationName,
  memberName,
  roomName,
  checkIn,
  checkOut,
  baseGuests,
  extraCharge,
  parkingAvailable,
  cookingAvailable,
  roomPrice,
  roomImageUrls,
}: ReservationDetailProps) => {
  return (
    <Container>
      <TitleText>예약내역 상세</TitleText>
      <DetailBox>
        <ImageBox>
          <Image src={roomImageUrls[0]} alt={accomodationName} fill objectFit="cover" />
        </ImageBox>

        <InfoBox>
          <NameText>{accomodationName}</NameText>
          <InfoDl>
            <div>
              <InfoDt>예약자 이름</InfoDt>
              <InfoDd>{memberName}</InfoDd>
            </div>
            <div>
              <InfoDt>예약 일정</InfoDt>
              <InfoDd>
                <span>{formatTime(checkIn, "YYYY년 MM월 DD일 HH:MM")} ~ </span>
                <span>{formatTime(checkOut, "YYYY년 MM월 DD일 HH:MM")}</span>
                <span> / {calculateNight(checkIn, checkOut)}박</span>
              </InfoDd>
            </div>
            <div>
              <InfoDt>기준 인원</InfoDt>
              <InfoDd>{baseGuests}인</InfoDd>
            </div>
            <div>
              <InfoDt>객실 타입</InfoDt>
              <InfoDd>{roomName}</InfoDd>
            </div>
            <div>
              <InfoDt>주차 여부</InfoDt>
              <InfoDd>{parkingAvailable ? "주차 가능" : "주차 불가능"}</InfoDd>
            </div>
            <div>
              <InfoDt>취사 여부</InfoDt>
              <InfoDd>{cookingAvailable ? "객실 내 취사 가능" : "객실 내 취사 불가능"}</InfoDd>
            </div>
            <div>
              <InfoDt>
                추가 금액
                <br />
                (인원 추가)
              </InfoDt>
              <InfoDd>{extraCharge.toLocaleString()}원</InfoDd>
            </div>
            <div>
              <InfoDt>총 결제 금액</InfoDt>
              <InfoDd>{roomPrice.toLocaleString()}원</InfoDd>
            </div>
          </InfoDl>
        </InfoBox>
      </DetailBox>
    </Container>
  );
};

export default ReservationDetail;
