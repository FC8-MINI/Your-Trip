import * as React from "react";
import {
  PayTitle,
  PayContainer,
  PayImageWrapper,
  PayItemImage,
  PayInfoBox,
  AccommodationName,
  InfoText,
  PriceText,
  CheckInOutBox,
} from "./PayPage.styles";
import PayTerms from "../PayTerms";
import Container from "@/components/Container";

const PayPage: React.FC = () => {
  const accommodation = {
    imageUrl: "https://dummyimage.com/600x400/000/fff",
    name: "스탠포드 호텔 제주",
    checkInDate: "2024-06-17",
    checkInTime: "15:00",
    checkOutDate: "2024-06-18",
    checkOutTime: "11:00",
    roomName: "스위트",
    people: 2,
    price: 240000,
    getNights() {
      const checkIn = new Date(this.checkInDate);
      const checkOut = new Date(this.checkOutDate);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nights = timeDiff / (1000 * 3600 * 24);
      return nights;
    },
  };

  return (
    <Container>
      <PayTitle>결제</PayTitle>
      <PayContainer>
        <PayImageWrapper>
          <PayItemImage src={accommodation.imageUrl} alt={accommodation.name} />
        </PayImageWrapper>
        <PayInfoBox>
          <AccommodationName>{accommodation.name}</AccommodationName>
          <div>
            <InfoText>{accommodation.roomName}</InfoText>
            <InfoText>/{accommodation.getNights()}박</InfoText>
            <InfoText>/{accommodation.people}명</InfoText>
          </div>
          <CheckInOutBox>
            <div>
              <span>체크인</span>
              <p>
                {accommodation.checkInDate} {accommodation.checkInTime}
              </p>
            </div>
            <div>
              <span>체크아웃</span>
              <p>
                {accommodation.checkOutDate} {accommodation.checkOutTime}
              </p>
            </div>
          </CheckInOutBox>
          <PriceText>
            총 결제금액 <span>{accommodation.price}원</span>
          </PriceText>
        </PayInfoBox>
      </PayContainer>
      <PayTerms amount={accommodation.price} />
    </Container>
  );
};

export default PayPage;
