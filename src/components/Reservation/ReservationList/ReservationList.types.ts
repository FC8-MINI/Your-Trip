export interface ReservationList {
  reservationId: number;
  accomodationName: string;
  accomodationAddress?: string;
  memberName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  peopleNumber: number;
  accomodationImageUrls: string[];
}

export interface ReservationListProps {
  reservationItems: ReservationList[];
}
