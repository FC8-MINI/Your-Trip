import AccomodationInfo from "../AccomodationInfo";
import AccomodationRoomList from "../AccomodationRoomList";
import Container from "@/components/Container";
import { AccomodationDetailProps } from "./AccomodationDetail.types";

const AccomodationDetail = ({
  accomodationDetail,
  accomodationRoomItems,
  accomodationLike,
}: AccomodationDetailProps) => {
  accomodationDetail.liked = accomodationLike;

  return (
    <Container>
      <AccomodationInfo {...accomodationDetail} />
      <AccomodationRoomList accomodationDetail={accomodationDetail} accomodationRoomItems={accomodationRoomItems} />
    </Container>
  );
};

export default AccomodationDetail;
