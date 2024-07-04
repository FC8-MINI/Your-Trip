import { useRouter } from "next/navigation";
import { RiMapPin2Fill, RiSignpostFill, RiTimeFill, RiParkingBoxFill, RiDoubleQuotesL } from "react-icons/ri";
import { PiCookingPotFill } from "react-icons/pi";
import {
  AccomodationInfoStyled,
  ImageBox,
  TitleBox,
  AccomodationName,
  AddressList,
  AddressItem,
  AddressText,
  PostcodeText,
  DescBox,
  DescText,
  UseInfoList,
  UseInfoItem,
  UseInfoText,
  RiDoubleQuotesRStyled,
} from "./AccomodationInfo.styles";
import { InfoTitle } from "../AccomodationDetail/AccomodationDetail.styles";
import Hr from "@/components/Hr";
import { AccomodationInfoProps } from "./AccomodationInfo.types";
import { formatTime } from "@/utils/time";
import Image from "next/image";
import SocialAction from "@/components/SocialAction";
import { useState } from "react";
import Swal from "sweetalert2";

const AccomodationInfo = ({
  name,
  accomodationImageUrls,
  description,
  postalCode,
  address,
  parkingAvailable,
  cookingAvailable,
  checkIn,
  checkOut,
}: AccomodationInfoProps) => {
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();

  const handleToggleLike = async () => {
    setIsLike(!isLike);

    try {
      const result = await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "success",
        timerProgressBar: true,
        title: "찜 목록에 추가했습니다.",
        confirmButtonText: "찜 목록보기",
        timer: 2500,
      });

      if (result.isConfirmed) {
        router.push("/like");
      }
    } catch (error) {
      console.error("Swal error:", error);
    }
  };

  return (
    <AccomodationInfoStyled>
      <ImageBox>
        <Image src={accomodationImageUrls[0]} fill objectFit="cover" alt={name} />
      </ImageBox>

      <TitleBox>
        <AccomodationName>{name}</AccomodationName>
        <SocialAction isLike={isLike} handleToggleLike={handleToggleLike} />
      </TitleBox>

      <AddressList>
        <AddressItem>
          <RiMapPin2Fill color="var(--color-black)" />
          <AddressText>{address}</AddressText>
        </AddressItem>
        <AddressItem>
          <RiSignpostFill color="var(--color-black)" />
          <PostcodeText>{postalCode}</PostcodeText>
        </AddressItem>
      </AddressList>

      <Hr $gap={true} />

      <InfoTitle>숙소 소개</InfoTitle>
      <DescBox>
        <RiDoubleQuotesL color="var(--color-gray)" fontSize={28} />
        <DescText>{description}</DescText>
        <RiDoubleQuotesRStyled color="var(--color-gray)" fontSize={28} />
      </DescBox>

      <Hr $gap={true} />

      <InfoTitle>숙소 이용 정보</InfoTitle>
      <UseInfoList>
        <UseInfoItem>
          <RiTimeFill color="var(--color-black)" />
          <UseInfoText>
            체크인: <span>{formatTime(checkIn)}</span> | 체크아웃: <span>{formatTime(checkOut)}</span>
          </UseInfoText>
        </UseInfoItem>

        <UseInfoItem>
          <RiParkingBoxFill color="var(--color-black)" />
          <UseInfoText>{parkingAvailable ? "주차 가능" : "주차 불가능"}</UseInfoText>
        </UseInfoItem>

        <UseInfoItem>
          <PiCookingPotFill color="var(--color-black)" />
          <UseInfoText>{cookingAvailable ? "객실 내 취사 가능" : "객실 내 취사 불가능"}</UseInfoText>
        </UseInfoItem>
      </UseInfoList>

      <Hr $gap={true} />
    </AccomodationInfoStyled>
  );
};

export default AccomodationInfo;
