import Image from "next/image";
import {
  AccomodationItemStyled,
  Description,
  DescriptionAddress,
  DescriptionAvailable,
  DescriptionCategory,
  DescriptionPrice,
  DescriptionTitle,
} from "./AccomodationItem.styles";
import Link from "next/link";
import { MdOutlineNoMeals } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { TbParking, TbParkingOff } from "react-icons/tb";

const AccomodationItem = () => {
  return (
    <li>
      <Link href="/">
        <AccomodationItemStyled>
          <Image
            src="/images/hero_background_image.jpg"
            alt="숙소 이미지"
            width={259}
            height={260}
            style={{ borderRadius: "1.6rem" }}
          />
          <Description>
            <DescriptionCategory>카테고리</DescriptionCategory>
            <DescriptionTitle>숙소 이름</DescriptionTitle>
            <DescriptionAddress>위치</DescriptionAddress>
            <DescriptionAvailable>
              <MdOutlineNoMeals style={{ color: "#f57373" }} />
              <GiMeal style={{ color: "#A8A8A8" }} />
              <TbParkingOff style={{ color: "#f57373" }} />
              <TbParking style={{ color: "#A8A8A8" }} />
            </DescriptionAvailable>
            <DescriptionPrice>123,000원</DescriptionPrice>
          </Description>
        </AccomodationItemStyled>
      </Link>
    </li>
  );
};

export default AccomodationItem;
