import {
  ItemContainer,
  ImageWrapper,
  ItemImage,
  PlaceName,
  RoomPeriod,
  ReservationButton,
  TotalPriceText,
  ItemInfoBox,
  CheckInOutBox,
  Person,
} from "./CartItem.styles";
import { CartItemProps } from "./CartItem.types";

const calculateNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
  return Math.ceil(differenceInTime / (1000 * 3600 * 24)); // 날짜 차이를 올림하여 정수로 변환
};

const CartItem = ({ item, roomNames, index }: CartItemProps & { index: number }) => {
  const checkIn: string = item.checkIn;
  const checkOut: string = item.checkOut;

  return (
    <ItemContainer>
      <ImageWrapper>
        <ItemImage src={item.imageUrl} alt={item.name} />
      </ImageWrapper>
      <ItemInfoBox>
        <div>
          <PlaceName>{item.name}</PlaceName>
          <RoomPeriod>
            {roomNames[index]}/{calculateNights(checkIn, checkOut)}박
          </RoomPeriod>
          <Person>/{item.peopleNumber}명</Person>
        </div>
        <CheckInOutBox>
          <div>
            <span>체크인</span>
            <p>{checkIn}</p>
          </div>
          <div>
            <span>체크아웃</span>
            <p>{checkOut}</p>
          </div>
        </CheckInOutBox>
        <TotalPriceText>
          결제금액
          <span>{item.price.toLocaleString()}원</span>
        </TotalPriceText>
        <ReservationButton href="/pay">예약</ReservationButton> {/* 변경된 부분 */}
      </ItemInfoBox>
    </ItemContainer>
  );
};

export default CartItem;
