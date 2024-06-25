import * as React from "react";
import AccomodationInfo from "../AccomodationInfo";
import AccomodationRoomList from "../AccomodationRoomList";
import AccomodationSelect from "../AccomodationSelect";
import { ImageStyled, ImageBox } from "./AccomodationDetail.styles";
import thumb from "/public/images/thumb.jpg";
import Container from "@/components/Container";
import { AccomodationDetailProps } from "./AccomodationDetail.types";

const AccomodationDetail: React.FC<AccomodationDetailProps> = ({ accomodationDetail, rooms }) => {
  return (
    <Container>
      <ImageBox>
        <ImageStyled src={thumb} width={"100%"} height={"100%"} alt="호텔 사진" />
      </ImageBox>
      <AccomodationInfo {...accomodationDetail} />
      <AccomodationSelect />
      <AccomodationRoomList rooms={rooms} />
    </Container>
  );
};

export default AccomodationDetail;
