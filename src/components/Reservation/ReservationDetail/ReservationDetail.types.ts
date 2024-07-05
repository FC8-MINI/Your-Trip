export interface ReservationDetailProps {
  accomodationName: string;
  memberName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  baseGuests: number;
  extraCharge: number;
  parkingAvailable: boolean;
  cookingAvailable: boolean;
  roomPrice: number;
  roomImageUrls: string[];
}
