import { Dispatch, SetStateAction } from "react";

export interface Cart {
  roomId: number;
  accommodationName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  peopleNumber: number;
  totalPrice: number;
  roomImageUrls: string[];
  baseGuests: number;
  maxGuests: number;
  reservationId: number;
  extraPersonCharge: number;
}

export interface CartItemProps {
  item: Cart;
  index: number;
  selectedItems: boolean[];
  setSelectedItems: Dispatch<SetStateAction<boolean[]>>;
}
