import { Cart } from "@/components/Cart/CartItem/CartItem.types";

export type ItemSubset = Pick<Cart, "checkIn" | "checkOut" | "roomName" | "peopleNumber">;

export interface PayEditProps {
  item: ItemSubset;
  onClose: () => void;
  onUpdate: (updatedInfo: ItemSubset) => void;
  roomNames: string[];
  index: number;
}

export interface PayEditFormValues {
  checkIn: string;
  checkOut: string;
  roomName: string;
  peopleNumber: number;
}
