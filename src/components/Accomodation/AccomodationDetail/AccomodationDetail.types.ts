import { AccomodationItem } from "../AccomodationItem";
import { Room } from "../AccomodationRoomList";

export interface AccomodationDetailProps {
  accomodationDetail: AccomodationItem;
  rooms: Room[];
}
