import { CategoryData } from "./Category.constants";

export interface CategoryListProps {
  $isOpened: boolean;
}

export interface CategoryItemProps {
  $isActive: boolean;
}

export type CategoryType = (typeof CategoryData)[number]["categoryName"];

export interface CategoryProps {
  category?: CategoryType;
}
