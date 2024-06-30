import {
  ItemContainer,
  ImageWrapper,
  ItemImage,
  PlaceName,
  RoomPeriod,
  ReservationButton,
  TotalPriceText,
  ItemInfoBox,
  ImageCheckbox,
  CheckInOutBox,
  Person,
} from "./CartItem.styles";
import { CartComponentProps } from "./CartItem.types";

const calculateNights = (checkIn: string, checkOut: string) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
  return Math.ceil(differenceInTime / (1000 * 3600 * 24));
};

// 날짜를 형식에 맞게 변환하는 함수
const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("ko-KR", options).replace(", ", " ");
};

const CartItem = ({ item, roomNames, index, isSelected, onToggle }: CartComponentProps) => {
  const checkIn: string = item.checkIn;
  const checkOut: string = item.checkOut;

  return (
    <ItemContainer>
      <ImageWrapper>
        <ImageCheckbox type="checkbox" checked={isSelected} onChange={onToggle} />
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
            <p>{formatDateTime(checkIn)}</p>
          </div>
          <div>
            <span>체크아웃</span>
            <p>{formatDateTime(checkOut)}</p>
          </div>
        </CheckInOutBox>
        <TotalPriceText>
          결제금액
          <span>{item.price.toLocaleString()}원</span>
        </TotalPriceText>
        <ReservationButton href="/pay">예약</ReservationButton>
      </ItemInfoBox>
    </ItemContainer>
  );
};

export default CartItem;
