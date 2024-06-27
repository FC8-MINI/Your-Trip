"use client";

import Link from "next/link";
import { CATEGORY_DATA } from "./Category.constants";
import { CategoryContainer, CategoryItem, CategoryNavButton, CategorySwiperBox } from "./Category.styles";
import { CategoryProps } from "./Category.types";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Category = ({ category }: CategoryProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    <div>
      <CategoryContainer>
        <CategoryNavButton
          onClick={() => {
            swiper?.slidePrev();
          }}
        >
          {"<"}
        </CategoryNavButton>
        <CategorySwiperBox>
          <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            slidesPerGroupAuto
            onSwiper={(e) => {
              setSwiper(e);
            }}
            className="category-swiper"
          >
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
        </CategorySwiperBox>
        <CategoryNavButton
          onClick={() => {
            swiper?.slideNext();
          }}
        >
          {">"}
        </CategoryNavButton>
      </CategoryContainer>
    </div>
  );
};

export default Category;
