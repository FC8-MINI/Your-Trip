import Container from "@/components/Container";
import {
  PayTitle,
  PayContainer,
  PayImageWrapper,
  PayInfoBox,
  AccommodationName,
  InfoText,
  PriceText,
  CheckInOutBox,
} from "./PayInfo.styles";
import { PayInfoProps } from "./PayInfo.types";
import Image from "next/image";
import { calculateNight, formatTime } from "@/utils/time";

const PayInfo = ({
  accommodationName,
  roomName,
  peopleNumber,
  totalPrice,
  checkIn,
  checkOut,
  imageUrl,
}: PayInfoProps) => {
  return (
    <Container>
      <PayTitle>결제</PayTitle>
      <PayContainer>
        <PayImageWrapper>
          <Image
            src={`https://i.postimg.cc/cJQR3R80/1-3.jpg`}
            alt={accommodationName}
            fill
            style={{ objectFit: "cover" }}
          />
        </PayImageWrapper>
        <PayInfoBox>
          <AccommodationName>{accommodationName}</AccommodationName>
          <InfoText>
            {roomName}
            {<span>/</span>}
            {peopleNumber}명{<span>/</span>}
            {calculateNight(checkIn, checkOut)}박
          </InfoText>
          <CheckInOutBox>
            <div>
              <span>체크인</span>
              <p>{formatTime(checkIn, "YYYY년 MM월 DD일 HH:MM")}</p>
            </div>
            <div>
              <span>체크아웃</span>
              <p>{formatTime(checkOut, "YYYY년 MM월 DD일 HH:MM")}</p>
            </div>
          </CheckInOutBox>
          <PriceText>
            총 결제금액 <span>{Number(totalPrice).toLocaleString()}원</span>
          </PriceText>
        </PayInfoBox>
      </PayContainer>
    </Container>
  );
};

export default PayInfo;
