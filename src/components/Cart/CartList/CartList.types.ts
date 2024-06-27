import { Item } from "../CartItem/CartItem.types";

export interface CartListProps {
  roomNames: string[];
  peopleOptions: { value: number; label: string }[];
  dateOptions: { value: string; label: string }[];
  items: Item[];
}
