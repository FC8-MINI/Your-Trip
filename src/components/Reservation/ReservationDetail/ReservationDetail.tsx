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
} from "@/components/Reservation/ReservationDetail";
import { reservations } from "@/components/Reservation/Reservation";
import { notFound } from "next/navigation";
import Image from "next/image";

const ReservationDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const reservation = reservations.find((res) => res.id === parseInt(id, 10));

  if (!reservation) {
    notFound();
  }

  return (
    <Container>
      <TitleText>예약내역 상세</TitleText>
      <DetailBox>
        <ImageBox>
          <Image src="/images/thumb.jpg" alt={reservation.name} fill objectFit="cover" />
        </ImageBox>

        <InfoBox>
          <NameText>{reservation.name}</NameText>
          <InfoDl>
            <div>
              <InfoDt>예약번호</InfoDt>
              <InfoDd>{`24${reservation.id}`}</InfoDd>
            </div>
            <div>
              <InfoDt>예약자 이름</InfoDt>
              <InfoDd>김패캠</InfoDd>
            </div>
            <div>
              <InfoDt>예약 일정</InfoDt>
              <InfoDd>
                <span>
                  {reservation.checkInDate} {reservation.checkInTime} ~
                </span>
                <span>
                  {reservation.checkOutDate} {reservation.checkOutTime}
                </span>
                <span> / 1박</span>
              </InfoDd>
            </div>
            <div>
              <InfoDt>객실 타입</InfoDt>
              <InfoDd>{reservation.roomName}</InfoDd>
            </div>
            <div>
              <InfoDt>
                추가 금액
                <br />
                (인원 추가)
              </InfoDt>
              <InfoDd>{reservation.extraPrice.toLocaleString()}원</InfoDd>
            </div>
            <div>
              <InfoDt>총 결제 금액</InfoDt>
              <InfoDd>{reservation.price.toLocaleString()}원</InfoDd>
            </div>
          </InfoDl>
        </InfoBox>
      </DetailBox>
    </Container>
  );
};

export default ReservationDetail;
