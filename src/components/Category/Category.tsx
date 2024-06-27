"use client";

import Link from "next/link";
import { CATEGORY_DATA } from "./Category.constants";
import {
  CategoryContainer,
  CategoryItem,
  CategoryNavButton,
  CategorySwiperBox,
  CategorySwiperLeftGradient,
  CategorySwiperRightGradient,
} from "./Category.styles";
import { CategoryProps } from "./Category.types";
import { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Category = ({ category }: CategoryProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevBtnRef = useRef<HTMLButtonElement>();
  const nextBtnRef = useRef<HTMLButtonElement>();

  return (
    <div>
      <CategoryContainer>
        <CategoryNavButton
          ref={prevBtnRef}
          onClick={() => {
            swiper?.slidePrev();
          }}
          disabled={isBeginning}
          $disabled={isBeginning}
        >
          {isBeginning ? "-" : "<"}
        </CategoryNavButton>
        {isBeginning || <CategorySwiperLeftGradient />}
        <CategorySwiperBox>
          <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            slidesPerGroupAuto
            onSwiper={(e) => {
              setSwiper(e);
            }}
            className="category-swiper"
            onSlideChange={() => {
              if (swiper?.isBeginning) {
                setIsBeginning(true);
              } else {
                setIsBeginning(false);
              }

              if (swiper?.isEnd) {
                setIsEnd(true);
              } else {
                setIsEnd(false);
              }
            }}
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
        {isEnd || <CategorySwiperRightGradient />}
        <CategoryNavButton
          ref={nextBtnRef}
          onClick={() => {
            swiper?.slideNext();
          }}
          disabled={isEnd}
          $disabled={isEnd}
        >
          {isEnd ? "-" : ">"}
        </CategoryNavButton>
      </CategoryContainer>
    </div>
  );
};

export default Category;
