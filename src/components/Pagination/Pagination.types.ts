import { CategoryType } from "../Category/Category.types";

export interface PaginationItemProps {
  $isActive: boolean;
  $isLink: boolean;
}

export interface PaginationProps {
  maxPage: number;
  nowPage: number;
  category?: CategoryType;
}
