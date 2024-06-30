export interface Cart {
  id: string;
  name: string;
  imageUrl: string;
  address: string;
  checkIn: string;
  checkOut: string;
  roomName: string;
  peopleNumber: number;
  price: number;
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
