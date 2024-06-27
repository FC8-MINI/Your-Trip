import { Item } from "../CartItem/CartItem.types";

export interface CartPageProps {
  initialItems: Item[];
  roomNames: string[];
  peopleOptions: { value: number; label: string }[];
  dateOptions: { value: string; label: string }[];
}
