import { CATEGORY_DATA } from "./Category.constants";

export interface CategoryItemProps {
  $isActive: boolean;
}

export type CategoryType = (typeof CATEGORY_DATA)[number]["categoryName"];

export interface CategoryProps {
  category?: CategoryType;
}
