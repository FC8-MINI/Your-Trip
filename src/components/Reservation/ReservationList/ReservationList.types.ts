export interface ReservationList {
  reservationId: number;
  accomodationName: string;
  accomodationAddress?: string;
  userName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  peopleNumber: number;
}

export interface ReservationListProps {
  reservationItems: ReservationList[];
}
