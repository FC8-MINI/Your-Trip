import { RiMapPin2Fill, RiSignpostFill, RiTimeFill, RiParkingBoxFill, RiDoubleQuotesL } from "react-icons/ri";
import { PiCookingPotFill } from "react-icons/pi";
import {
  AccomodationInfoStyled,
  ImageBox,
  NameText,
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
import { InfoTitleText } from "../AccomodationDetail/AccomodationDetail.styles";
import Hr from "@/components/Hr";
import { AccomodationInfoProps } from "./AccomodationInfo.types";
import { formatTime } from "@/utils/time";
import Image from "next/image";

const AccomodationInfo: React.FC<AccomodationInfoProps> = ({
  id,
  name,
  description,
  postalCode,
  address,
  parkingAvailable,
  cookingAvailable,
  checkIn,
  checkOut,
  categoryId,
}) => {
  return (
    <AccomodationInfoStyled>
      <ImageBox>
        <Image src="/images/thumb.jpg" fill objectFit="cover" alt={name} />
      </ImageBox>

      <NameText>{name}</NameText>

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

      <InfoTitleText>숙소 소개</InfoTitleText>
      <DescBox>
        <RiDoubleQuotesL color="var(--color-gray)" fontSize={28} />
        <DescText>{description}</DescText>
        <RiDoubleQuotesRStyled color="var(--color-gray)" fontSize={28} />
      </DescBox>

      <Hr $gap={true} />

      <InfoTitleText>숙소 이용 정보</InfoTitleText>
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
          <UseInfoText>{cookingAvailable ? "객실 내 취사 가능" : "취사 불가능"}</UseInfoText>
        </UseInfoItem>
      </UseInfoList>

      <Hr $gap={true} />
    </AccomodationInfoStyled>
  );
};

export default AccomodationInfo;
