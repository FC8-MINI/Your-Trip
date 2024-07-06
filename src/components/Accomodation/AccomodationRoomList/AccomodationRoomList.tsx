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
  OptionInfoText,
} from "./AccomodationRoomList.styles";
import { RiUser3Fill, RiShoppingCart2Line } from "react-icons/ri";
import { AccomodationRoom, AccomodationRoomListProps } from "./AccomodationRoomList.types";
import Image from "next/image";
import Swal from "sweetalert2";
import Button from "@/components/Button";
import AccomodationRoomOption from "../AccomodationRoomOption";
import { useRef, useEffect, useState } from "react";
import { OptionParams } from "../AccomodationRoomOption/AccomodationRoomOption";

const AccomodationRoomList = ({ accomodationDetail, accomodationRoomItems }: AccomodationRoomListProps) => {
  const router = useRouter();
  const optionRef = useRef<{ getOptionParams: () => OptionParams }>(null);
  const [cartParams, setCartParams] = useState<{ roomId: number; optionParams: OptionParams | null } | null>(null);

  useEffect(() => {
    const addToCart = async () => {
      if (!cartParams) return;

      const { roomId, optionParams } = cartParams;
      const maxGuests = accomodationRoomItems.find((item) => item.id === roomId)?.maxGuests;

      if (!optionParams?.checkIn || !optionParams?.checkOut || !optionParams?.guests) {
        return await Swal.fire({
          icon: "error",
          timerProgressBar: true,
          title: "모든 항목을 입력해주세요.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else if (maxGuests && optionParams?.guests > maxGuests) {
        return await Swal.fire({
          icon: "error",
          timerProgressBar: true,
          title: `최대 입력 가능한 인원 수는 ${maxGuests} 입니다.`,
          timer: 2000,
          showConfirmButton: false,
        });
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
            checkIn: optionParams?.checkIn,
            checkOut: optionParams?.checkOut,
            guests: optionParams?.guests,
          }),
        });

        if (!response.ok) {
          if (response.status === 409) {
            await Swal.fire({
              icon: "error",
              timerProgressBar: true,
              title: "이미 존재하는 장바구니 항목입니다.",
              timer: 2000,
              showConfirmButton: false,
            });
          } else if (response.status === 500) {
            await Swal.fire({
              icon: "error",
              timerProgressBar: true,
              title: "로그인이 필요합니다.",
              timer: 2000,
              showConfirmButton: false,
            });
          } else {
            const errorData = await response.json();
            console.error("서버 오류:", errorData);
            throw new Error("장바구니에 추가하지 못했습니다.");
          }
        } else {
          await Swal.fire({
            icon: "success",
            timerProgressBar: true,
            title: "장바구니에 상품이 담겼습니다.",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      } catch (error) {
        console.error("Swal 오류:", error);
      } finally {
        setCartParams(null);
      }
    };

    addToCart().catch((error) => {
      console.error("addToCart 오류:", error);
    });
  }, [cartParams]);

  const handleCartButtonClick = (roomId: number) => {
    const optionParams = optionRef.current?.getOptionParams();
    if (optionParams !== undefined) {
      setCartParams({ roomId, optionParams });
    } else {
      setCartParams({ roomId, optionParams: null });
    }
  };

  const handleReserveButtonClick = async (accomodationRoomItem: AccomodationRoom) => {
    const optionParams = optionRef.current?.getOptionParams();

    if (!optionParams?.checkIn || !optionParams?.checkOut || !optionParams?.guests) {
      return await Swal.fire({
        icon: "error",
        timerProgressBar: true,
        title: "모든 항목을 입력해주세요.",
        timer: 2000,
        showConfirmButton: false,
      });
    } else if (optionParams?.guests > accomodationRoomItem.maxGuests) {
      return await Swal.fire({
        icon: "error",
        timerProgressBar: true,
        title: `최대 입력 가능한 인원 수는 ${accomodationRoomItem.maxGuests} 입니다.`,
        timer: 2000,
        showConfirmButton: false,
      });
    }

    try {
      const totalPrice =
        optionParams.guests > accomodationRoomItem.maxGuests
          ? (accomodationRoomItem.maxGuests - optionParams.guests) * accomodationRoomItem.extraPersonCharge +
            accomodationRoomItem.price
          : accomodationRoomItem.price;

      router.push(
        `/pay?accommodationName=${accomodationDetail.name}&roomId=${accomodationRoomItem.id}&roomName=${accomodationRoomItem.name}&peopleNumber=${optionParams.guests}&totalPrice=${totalPrice}&checkIn=${optionParams.checkIn + ":00"}&checkOut=${optionParams.checkOut + ":00"}&imageUrl=${accomodationDetail.accomodationImageUrls[0].split("https://i.postimg.cc/")[1]}`,
      );
    } catch (error) {
      console.error("네비게이션 오류:", error);
    }
  };

  return (
    <>
      <OptionInfoText>
        * 로그인 후 체크인, 체크아웃, 인원을 입력하시고 원하는 객실의 장바구니 또는 객실 예약 버튼을 클릭 후 예약해
        주세요.
      </OptionInfoText>

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
                    <CartButton type="button" onClick={() => handleCartButtonClick(accomodationRoomItem.id)}>
                      <RiShoppingCart2Line />
                    </CartButton>
                  )}
                  <Button
                    type="button"
                    $mode="primary"
                    onClick={() => handleReserveButtonClick(accomodationRoomItem)}
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
