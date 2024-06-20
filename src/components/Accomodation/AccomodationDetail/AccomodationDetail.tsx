import AccomodationInfo from "../AccomodationInfo";
import AccomodationRoom from "../AccomodationRoom";
import AccomodationSelect from "../AccomodationSelect";
import { ImageStyled, ImageBox } from "./AccomodationDetail.styles";
import thumb from "/public/images/thumb.jpg";
import Container from "@/components/Container";

const AccomodationInfoData = {
  name: "세인트존스 호텔",
  address: "강원 강릉시 강문동 1-1",
  postcode: "25467",
  description:
    "강문해변 앞에 자리 잡아 객실에서 드넓고 아름다운 바다를 감상할 수 있습니다. \n 더불어 아름다운 대자연과 어우러지는 특별하고도 환상적인 경험을 느낄 수 있습니다.",
  checkInTime: "16:00",
  checkOutTime: "11:00",
  parkingInfo: "무료 주차 가능 (1박 1차량 무료)",
  cookingInfo: "객실 내 취사 가능",
};

const AccomodationDetail = () => {
  return (
    <Container>
      <ImageBox>
        <ImageStyled src={thumb} width={"100%"} height={"100%"} alt="호텔 사진" />
      </ImageBox>
      <AccomodationInfo {...AccomodationInfoData} />
      <AccomodationSelect />
      <AccomodationRoom />
    </Container>
  );
};

export default AccomodationDetail;
