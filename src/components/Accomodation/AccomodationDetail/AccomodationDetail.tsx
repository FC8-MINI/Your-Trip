import Hr from "@/components/Hr";
import AccomodationInfo from "../AccomodationInfo";
import AccomodationRoom from "../AccomodationRoom";
import AccomodationSelect from "../AccomodationSelect";
import { ImageStyled, ImageBox } from "./AccomodationDetail.styles";
import thumb from "/public/images/thumb.jpg";
import Container from "@/components/Container";

const AccomodationDetail = () => {
  return (
    <Container>
      <ImageBox>
        <ImageStyled src={thumb} width={"100%"} height={"100%"} alt="호텔 사진" />
      </ImageBox>
      <AccomodationInfo />
      <AccomodationSelect />
      <AccomodationRoom />
    </Container>
  );
};

export default AccomodationDetail;
