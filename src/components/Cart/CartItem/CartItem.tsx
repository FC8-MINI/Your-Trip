import { useFormContext, Controller } from "react-hook-form";
import {
  ItemContainer,
  ImageWrapper,
  ItemImage,
  PlaceName,
  RoomPeriod,
  EditButton,
  TotalPriceText,
  ItemInfoBox,
  CheckInOutBox,
  Person,
  ImageCheckbox,
} from "./CartItem.styles";
import { CartItemProps } from "./CartItem.types";
import CartEdit from "../CartEdit";

const CartItem = ({ item, roomNames, peopleOptions, dateOptions, index }: CartItemProps & { index: number }) => {
  const { setValue, watch, control } = useFormContext();
  const isEditOpen = watch(`items[${index}].isEditOpen`, false);

  const checkInDate: string = watch(`items[${index}].checkInDate`, item.checkInDate);
  const checkInTime: string = watch(`items[${index}].checkInTime`, item.checkInTime);
  const checkOutDate: string = watch(`items[${index}].checkOutDate`, item.checkOutDate);
  const checkOutTime: string = watch(`items[${index}].checkOutTime`, item.checkOutTime);

  const calculateNights = (checkIn: string, checkOut: string) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24)); // 날짜 차이를 올림하여 정수로 변환
  };

  const handleCloseEdit = () => {
    setValue(`items[${index}].isEditOpen`, false);
  };

  return (
    <>
      <ItemContainer>
        <ImageWrapper>
          <Controller
            name={`items.${index}.selected`}
            control={control}
            render={({ field }) => (
              <ImageCheckbox
                type="checkbox"
                checked={field.value || false}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)}
              />
            )}
          />
          <ItemImage src={item.imageUrl} alt={item.name} />
        </ImageWrapper>
        <ItemInfoBox>
          <div>
            <PlaceName>{item.name}</PlaceName>
            <RoomPeriod>
              {roomNames[index]}/{calculateNights(checkInDate, checkOutDate)}박
            </RoomPeriod>
            <Person>/{item.people}명</Person>
          </div>
          <CheckInOutBox>
            <div>
              <span>체크인</span>
              <p>
                {checkInDate} {checkInTime}
              </p>
            </div>
            <div>
              <span>체크아웃</span>
              <p>
                {checkOutDate} {checkOutTime}
              </p>
            </div>
          </CheckInOutBox>
          <TotalPriceText>
            결제금액
            <span>{item.price.toLocaleString()}원</span>
          </TotalPriceText>
          <EditButton onClick={() => setValue(`items[${index}].isEditOpen`, true)}>예약</EditButton>
        </ItemInfoBox>
      </ItemContainer>
      {isEditOpen && (
        <CartEdit
          item={item}
          onClose={handleCloseEdit}
          roomNames={roomNames}
          peopleOptions={peopleOptions}
          dateOptions={dateOptions}
          index={index}
        />
      )}
    </>
  );
};

export default CartItem;
