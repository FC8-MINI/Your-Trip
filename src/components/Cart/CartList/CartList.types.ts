import { Cart } from "../CartItem/CartItem.types";

export interface CartListProps {
  items: Cart[];
}

export interface DeleteRequestPayload {
  reservationIds: number[];
}
