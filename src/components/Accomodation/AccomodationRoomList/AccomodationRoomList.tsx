import { useRouter } from "next/navigation";
import { InfoTitle } from "../AccomodationDetail/AccomodationDetail.styles";
import {
  RoomList,
  RoomItem,
  RoomImageBox,
  RoomInfoBox,
  RoomNameText,
  InfoWhiteBox,
  RoomPersonText,
  RoomPersonExtraText,
  RoomPriceBox,
  DayPriceText,
  TotalPriceText,
  RoomButtonBox,
  CartButton,
} from "./AccomodationRoomList.styles";
import { RiUser3Fill, RiShoppingCart2Line } from "react-icons/ri";
import { AccomodationRoomListProps } from "./AccomodationRoomList.types";
import Image from "next/image";
import Swal from "sweetalert2";
import Button from "@/components/Button";

const AccomodationRoomList = ({ accomodationRoomItems }: AccomodationRoomListProps) => {
  const router = useRouter();

  const handleCartButtonClick = async () => {
    try {
      const result = await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "success",
        timerProgressBar: true,
        title: "장바구니에 상품이 담겼습니다.",
        confirmButtonText: "장바구니 보기",
        timer: 2500,
      });

      if (result.isConfirmed) {
        router.push("/cart");
      }
    } catch (error) {
      console.error("Swal error:", error);
    }
  };

  const handleReserveButtonClick = async () => {
    try {
      await router.push("/pay");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <>
      <InfoTitle>객실 선택</InfoTitle>

      <RoomList>
        {accomodationRoomItems.map((accomodationRoomItem) => (
          <RoomItem key={accomodationRoomItem.id}>
            <RoomImageBox>
              <Image src="/images/thumb.jpg" fill alt={accomodationRoomItem.name} objectFit="cover" />
            </RoomImageBox>

            <RoomInfoBox>
              <RoomNameText>{accomodationRoomItem.name}</RoomNameText>

              <InfoWhiteBox>
                <div>
                  <RiUser3Fill />
                  <RoomPersonText>
                    기준 <span>{accomodationRoomItem.baseGuests}</span>인 / 최대{" "}
                    <span>{accomodationRoomItem.maxGuests}</span>인
                  </RoomPersonText>
                  <RoomPersonExtraText>
                    인원 추가 시 인당 <span>{accomodationRoomItem.extraPersonCharge.toLocaleString()}</span>원 비용 추가
                  </RoomPersonExtraText>
                </div>

                <RoomPriceBox>
                  <DayPriceText>1박</DayPriceText>
                  <TotalPriceText>{accomodationRoomItem.price.toLocaleString()}원</TotalPriceText>
                </RoomPriceBox>

                <RoomButtonBox>
                  {accomodationRoomItem.reservationAvailable && (
                    <CartButton type="button" onClick={handleCartButtonClick}>
                      <RiShoppingCart2Line />
                    </CartButton>
                  )}
                  <Button
                    type="button"
                    $mode="primary"
                    onClick={handleReserveButtonClick}
                    disabled={!accomodationRoomItem.reservationAvailable}
                  >
                    {accomodationRoomItem.reservationAvailable ? "객실 예약" : "예약 마감"}
                  </Button>
                </RoomButtonBox>
              </InfoWhiteBox>
            </RoomInfoBox>
          </RoomItem>
        ))}
      </RoomList>
    </>
  );
};

export default AccomodationRoomList;
