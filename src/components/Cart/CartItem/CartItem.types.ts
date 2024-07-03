export interface Cart {
  roomId: number;
  accommodationName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  peopleNumber: number;
  totalPrice: number;
  imageUrl: string;
  baseGuests?: number;
  maxGuests?: number;
  reservationId?: string;
  extraPersonCharge?: number;
}

export interface CartProps {
  item: Cart;
  roomNames: string[];
}

export interface CartComponentProps extends CartProps {
  index: number;
  isSelected: boolean;
  onToggle: () => void;
}

export interface DeleteRequestPayload {
  reservationIds: number[];
}
