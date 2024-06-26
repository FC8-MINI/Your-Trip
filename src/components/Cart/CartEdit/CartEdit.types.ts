import { Item } from "../CartItem/CartItem.types";

type ItemSubset = Pick<
  Item,
  "id" | "checkInDate" | "checkInTime" | "checkOutDate" | "checkOutTime" | "roomName" | "people"
>;

export interface CartEditProps {
  item: ItemSubset;
  onClose: () => void;
  roomNames: string[];
  peopleOptions: { value: number; label: string }[];
  dateOptions: { value: string; label: string }[];
}
