"use client";

import Link from "next/link";
import { CATEGORY_DATA } from "./Category.constants";
import { CategoryContainer, CategoryItem } from "./Category.styles";
import { CategoryProps } from "./Category.types";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Category = ({ category }: CategoryProps) => {
  return (
    <div>
      <CategoryContainer>
        <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView="auto" navigation className="category-swiper">
          {CATEGORY_DATA.map(({ id, categoryName }) => {
            return (
              <SwiperSlide key={id}>
                <Link key={id} href={`/?category=${categoryName}&page=1`} scroll={false}>
                  <CategoryItem $isActive={category === categoryName}>{categoryName}</CategoryItem>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CategoryContainer>
    </div>
  );
};

export default Category;
