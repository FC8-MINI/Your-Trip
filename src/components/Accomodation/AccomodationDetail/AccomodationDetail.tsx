import * as React from "react";
import AccomodationInfo from "../AccomodationInfo";
import AccomodationRoomList from "../AccomodationRoomList";
import Container from "@/components/Container";
import { AccomodationDetailProps } from "./AccomodationDetail.types";

const AccomodationDetail: React.FC<AccomodationDetailProps> = ({ accomodationDetail, rooms }) => {
  return (
    <Container>
      <AccomodationInfo {...accomodationDetail} />
      <AccomodationRoomList rooms={rooms} />
    </Container>
  );
};

export default AccomodationDetail;
