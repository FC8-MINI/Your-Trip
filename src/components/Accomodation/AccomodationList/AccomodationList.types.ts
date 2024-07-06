import { type AccomodationItem } from "../AccomodationItem";

export interface AccomodationListProps {
  isMain: boolean;
  totalElements: number;
  accomodationItems: AccomodationItem[];
}
