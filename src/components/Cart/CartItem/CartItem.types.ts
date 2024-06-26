export interface Item {
  id: number;
  imageUrl: string;
  name: string;
  address: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  roomName: string;
  people: number;
  price: number;
  selected?: boolean;
  isEditOpen?: boolean;
}

export interface CartItemProps {
  item: Item;
  roomNames: string[];
  peopleOptions: { value: number; label: string }[];
  dateOptions: { value: string; label: string }[];
}
