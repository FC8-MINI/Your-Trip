import Container from "@/components/Container";
import {
  DetailBox,
  TitleText,
  ImageBox,
  ImageStyled,
  InfoBox,
  NameText,
  InfoDl,
  InfoDt,
  InfoDd,
} from "./ReservationDetail.styles";
import thumb from "/public/images/thumb.jpg";

const ReservationDetail = () => {
  return (
    <Container>
      <TitleText>예약내역 상세</TitleText>
      <DetailBox>
        <ImageBox>
          <ImageStyled src={thumb} width={"100%"} height={"100%"} alt="호텔 사진" />
        </ImageBox>

        <InfoBox>
          <NameText>세인트존스 호텔</NameText>
          <InfoDl>
            <div>
              <InfoDt>예약번호</InfoDt>
              <InfoDd>2406202300AE1FYE1</InfoDd>
            </div>
            <div>
              <InfoDt>예약자 이름</InfoDt>
              <InfoDd>김패캠</InfoDd>
            </div>
            <div>
              <InfoDt>예약 일정</InfoDt>
              <InfoDd>
                <span>2024.09.05 (목) 16:00 ~ </span>
                <span>2024.09.06 (금) 11:00 </span>
                <span>/ 1박</span>
              </InfoDd>
            </div>
            <div>
              <InfoDt>객실 타입</InfoDt>
              <InfoDd>디럭스 트윈</InfoDd>
            </div>
            <div>
              <InfoDt>
                추가 금액
                <br />
                (인원 추가)
              </InfoDt>
              <InfoDd>20,000원</InfoDd>
            </div>
            <div>
              <InfoDt>총 결제 금액</InfoDt>
              <InfoDd>240,000원</InfoDd>
            </div>
          </InfoDl>
        </InfoBox>
      </DetailBox>
    </Container>
  );
};

export default ReservationDetail;
