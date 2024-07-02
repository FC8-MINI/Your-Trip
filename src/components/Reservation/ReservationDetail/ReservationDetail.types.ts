export interface ReservationDetailProps {
  accomodationName: string;
  userName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  baseGuests?: number;
  extraPrice: number;
  roomPrice: number;
  parkingAvailable: boolean;
  cookingAvailable: boolean;
}
