export interface Item {
  id: number;
  imageUrl: string;
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  roomName: string;
  peopleNumber: number;
  price: number;
  roomId: number;
}

export interface CartItemProps {
  item: Item;
  roomNames: string[];
}
