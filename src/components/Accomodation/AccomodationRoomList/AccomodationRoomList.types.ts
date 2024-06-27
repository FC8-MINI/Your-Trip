export interface AccomodationRoomList {
  id: number;
  name?: string;
  baseGuests: number;
  price: number;
  maxGuests: number;
  extraPersonCharge: number;
}

export interface AccomodationRoomListProps {
  accomodationRoomItems: AccomodationRoomList[];
}
