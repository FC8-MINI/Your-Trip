export interface AccomodationRoomList {
  id: number;
  name?: string;
  baseGuests: number;
  price: number;
  maxGuests: number;
  extraPersonCharge: number;
  reservationAvailable: boolean;
}

export interface AccomodationRoomListProps {
  accomodationRoomItems: AccomodationRoomList[];
}
