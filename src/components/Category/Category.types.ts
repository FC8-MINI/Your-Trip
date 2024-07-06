import { CATEGORY_DATA } from "./Category.constants";

export interface CategoryItemProps {
  $isActive: boolean;
}

export interface CategoryNavButtonProps {
  $disabled: boolean;
}

export type CategoryType = (typeof CATEGORY_DATA)[number];

export interface CategoryProps {
  category?: CategoryType;
}
