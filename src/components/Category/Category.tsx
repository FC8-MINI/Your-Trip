"use client";

import Link from "next/link";
import { CategoryData } from "./Category.constants";
import { CategoryBorder, CategoryContainer, CategoryItem, CategoryList, CategoryToggleButton } from "./Category.styles";
import { useReducer } from "react";
import { CategoryProps } from "./Category.types";

const Category = ({ category }: CategoryProps) => {
  const [isOpened, toggleCategory] = useReducer((v) => !v, false);

  return (
    <CategoryBorder>
      <CategoryContainer>
        <CategoryList $isOpened={isOpened}>
          {CategoryData.map(({ id, categoryName }) => {
            return (
              <Link key={id} href={`/?category=${categoryName}&page=1`} scroll={false}>
                <CategoryItem $isActive={category === categoryName}>{categoryName}</CategoryItem>
              </Link>
            );
          })}
        </CategoryList>
        <CategoryToggleButton $mode="primary" onClick={() => toggleCategory()}>
          {isOpened ? "닫기" : "더보기"}
        </CategoryToggleButton>
      </CategoryContainer>
    </CategoryBorder>
  );
};

export default Category;
