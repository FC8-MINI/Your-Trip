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

const AccomodationInfo = () => {
  return (
    <>
      <NameText>세인트존스 호텔</NameText>

      <AddressList>
        <AddressItem>
          <RiMapPin2Fill color="var(--color-black)" />
          <AddressText>강원 강릉시 강문동 1-1</AddressText>
        </AddressItem>
        <AddressItem>
          <RiSignpostFill color="var(--color-black)" />
          <PostcodeText>25467</PostcodeText>
        </AddressItem>
      </AddressList>

      <Hr $gap={true} />

      <InfoTitleText>숙소 소개</InfoTitleText>
      <DescBox>
        <RiDoubleQuotesL color="var(--color-gray)" fontSize={28} />
        <DescText>
          강문해변 앞에 자리 잡아 객실에서 드넓고 아름다운 바다를 감상할 수 있습니다. <br />
          더불어 아름다운 대자연과 어우러지는 특별하고도 환상적인 경험을 느낄 수 있습니다.
        </DescText>
        <RiDoubleQuotesRStyled color="var(--color-gray)" fontSize={28} />
      </DescBox>

      <Hr $gap={true} />

      <InfoTitleText>숙소 이용 정보</InfoTitleText>
      <UseInfoList>
        <UseInfoItem>
          <RiTimeFill color="var(--color-black)" />
          <UseInfoText>
            체크인: <span>16:00</span> | 체크아웃: <span>11:00</span>
          </UseInfoText>
        </UseInfoItem>

        <UseInfoItem>
          <RiParkingBoxFill color="var(--color-black)" />
          <UseInfoText>무료 주차 가능 (1박 1차량 무료)</UseInfoText>
        </UseInfoItem>

        <UseInfoItem>
          <PiCookingPotFill color="var(--color-black)" />
          <UseInfoText>객실 내 취사 가능</UseInfoText>
        </UseInfoItem>
      </UseInfoList>

      <Hr $gap={true} />
    </>
  );
};

export default AccomodationInfo;
