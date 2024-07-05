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

export interface CartProps {
  item: Cart;
}
