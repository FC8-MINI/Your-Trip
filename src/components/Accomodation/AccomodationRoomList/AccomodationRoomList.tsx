"use client";

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
import AccomodationRoomOption from "../AccomodationRoomOption";
import { useRef, useEffect, useState } from "react";
import { OptionParams } from "../AccomodationRoomOption/AccomodationRoomOption";

const AccomodationRoomList = ({ accomodationRoomItems }: AccomodationRoomListProps) => {
  const router = useRouter();
  const optionRef = useRef<{ getOptionParams: () => OptionParams }>(null);
  const [cartParams, setCartParams] = useState<{ roomId: string; optionParams: OptionParams | null } | null>(null);

  useEffect(() => {
    const addToCart = async () => {
      if (!cartParams) return;

      const { roomId, optionParams } = cartParams;

      if (!optionParams) {
        console.error("옵션 파라미터가 존재하지 않습니다.");
        return;
      }

      try {
        const url = `https://api.miniteam2.store/api/cart`;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          cache: "no-store",
          body: JSON.stringify({
            roomId,
            checkIn: optionParams.checkIn,
            checkOut: optionParams.checkOut,
            guests: optionParams.guests,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("서버 오류:", errorData);
          throw new Error("장바구니에 추가하지 못했습니다.");
        }

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
        console.error("Swal 오류:", error);
      } finally {
        setCartParams(null);
      }
    };

    addToCart().catch((error) => {
      console.error("addToCart 에러:", error);
    });
  }, [cartParams, router]);

  const handleCartButtonClick = (roomId: string) => {
    const optionParams = optionRef.current?.getOptionParams();
    if (optionParams !== undefined) {
      setCartParams({ roomId, optionParams });
    } else {
      setCartParams({ roomId, optionParams: null });
    }
  };

  const handleReserveButtonClick = (roomId: string) => {
    try {
      router.push(`/pay/${roomId}`);
    } catch (error) {
      console.error("네비게이션 오류:", error);
    }
  };

  return (
    <>
      <AccomodationRoomOption ref={optionRef} />

      <InfoTitle>객실 선택</InfoTitle>

      <RoomList>
        {accomodationRoomItems.map((accomodationRoomItem) => (
          <RoomItem key={accomodationRoomItem.id}>
            <RoomImageBox>
              <Image
                src={accomodationRoomItem.roomImageUrls[0]}
                fill
                alt={accomodationRoomItem.name}
                objectFit="cover"
              />
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
                    <CartButton type="button" onClick={() => handleCartButtonClick(String(accomodationRoomItem.id))}>
                      <RiShoppingCart2Line />
                    </CartButton>
                  )}
                  <Button
                    type="button"
                    $mode="primary"
                    onClick={() => handleReserveButtonClick(String(accomodationRoomItem.id))}
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
