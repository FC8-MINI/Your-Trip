export interface AccomodationRoomList {
  id: number;
  name: string;
  baseGuests: number;
  price: number;
  maxGuests: number;
  extraPersonCharge: number;
  reservationAvailable: boolean;
  roomImageUrls: string[];
}

export interface AccomodationRoomListProps {
  accomodationRoomItems: AccomodationRoomList[];
}
