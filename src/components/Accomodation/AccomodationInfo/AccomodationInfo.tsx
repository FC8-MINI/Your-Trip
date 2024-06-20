import { RiMapPin2Fill, RiSignpostFill, RiTimeFill, RiParkingBoxFill, RiDoubleQuotesL } from "react-icons/ri";
import { PiCookingPotFill } from "react-icons/pi";
import {
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

const AccomodationInfo: React.FC<AccomodationInfoProps> = ({
  name,
  address,
  postcode,
  description,
  checkInTime,
  checkOutTime,
  parkingInfo,
  cookingInfo,
}) => {
  return (
    <>
      <NameText>{name}</NameText>

      <AddressList>
        <AddressItem>
          <RiMapPin2Fill color="var(--color-black)" />
          <AddressText>{address}</AddressText>
        </AddressItem>
        <AddressItem>
          <RiSignpostFill color="var(--color-black)" />
          <PostcodeText>{postcode}</PostcodeText>
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
            체크인: <span>{checkInTime}</span> | 체크아웃: <span>{checkOutTime}</span>
          </UseInfoText>
        </UseInfoItem>

        <UseInfoItem>
          <RiParkingBoxFill color="var(--color-black)" />
          <UseInfoText>{parkingInfo}</UseInfoText>
        </UseInfoItem>

        <UseInfoItem>
          <PiCookingPotFill color="var(--color-black)" />
          <UseInfoText>{cookingInfo}</UseInfoText>
        </UseInfoItem>
      </UseInfoList>

      <Hr $gap={true} />
    </>
  );
};

export default AccomodationInfo;
