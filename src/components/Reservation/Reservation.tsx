import Container from "../Container";
import { TitleText } from "./Reservation.styles";
import ReservationList, { ReservationListProps } from "./ReservationList";

const Reservation = ({ reservationItems }: ReservationListProps) => {
  return (
    <Container>
      <TitleText>예약 내역</TitleText>
      <ReservationList reservationItems={reservationItems} />
    </Container>
  );
};

export default Reservation;
