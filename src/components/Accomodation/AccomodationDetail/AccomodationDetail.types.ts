import { AccomodationItem } from "../AccomodationItem";
import { AccomodationRoom } from "../AccomodationRoomList";

export interface AccomodationDetailProps {
  accomodationDetail: AccomodationItem;
  accomodationRoomItems: AccomodationRoom[];
  accomodationLike: boolean;
}
