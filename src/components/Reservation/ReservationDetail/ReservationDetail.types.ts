export interface ReservationDetailProps {
  accomodationName: string;
  userName: string;
  roomName: string;
  checkIn: number;
  checkOut: number;
  baseGuests?: number;
  extraPrice: number;
  roomPrice: number;
  parkingAvailable: boolean;
  cookingAvailable: boolean;
}
