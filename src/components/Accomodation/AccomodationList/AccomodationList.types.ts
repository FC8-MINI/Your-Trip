import { CategoryType } from "@/components/Category/Category.types";
import { type AccomodationItem } from "../AccomodationItem";

export interface AccomodationListProps {
  category?: CategoryType;
  totalElements?: number;
  accomodationItems: AccomodationItem[];
}