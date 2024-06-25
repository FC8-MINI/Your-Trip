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
import { AccomodationItemProps } from "./AccomodationItem.types";

const AccomodationItem = ({ accomodationItem }: AccomodationItemProps) => {
  const { id, categoryId, name, address, parkingAvailable, cookingAvailable } = accomodationItem;

  return (
    <li>
      <Link href={`/accomodation/${id}`}>
        <AccomodationItemStyled>
          <Image
            src="/images/hero_background_image.jpg"
            alt="숙소 이미지"
            width={259}
            height={260}
            style={{ borderRadius: "1.6rem" }}
          />
          <Description>
            <DescriptionCategory>{categoryId}</DescriptionCategory>
            <DescriptionTitle>{name}</DescriptionTitle>
            <DescriptionAddress>{address}</DescriptionAddress>
            <DescriptionAvailable>
              {parkingAvailable ? (
                <TbParking style={{ color: "#A8A8A8" }} />
              ) : (
                <TbParkingOff style={{ color: "#f57373" }} />
              )}
              {cookingAvailable ? (
                <GiMeal style={{ color: "#A8A8A8" }} />
              ) : (
                <MdOutlineNoMeals style={{ color: "#f57373" }} />
              )}
            </DescriptionAvailable>
            <DescriptionPrice>123,000원</DescriptionPrice>
          </Description>
        </AccomodationItemStyled>
      </Link>
    </li>
  );
};

export default AccomodationItem;
