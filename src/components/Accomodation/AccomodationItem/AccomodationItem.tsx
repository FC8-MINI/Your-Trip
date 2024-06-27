import {
  AccomodationItemBox,
  AccomodationItemImageBox,
  AccomodationItemStyled,
  Description,
  DescriptionAddress,
  DescriptionAvailable,
  DescriptionDetail,
  DescriptionDetailText,
  DescriptionPrice,
  DescriptionTitle,
} from "./AccomodationItem.styles";
import Link from "next/link";
import { MdOutlineNoMeals } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { TbParking, TbParkingOff } from "react-icons/tb";
import { AccomodationItemProps } from "./AccomodationItem.types";
import Image from "next/image";

const AccomodationItem = ({ accomodationItem }: AccomodationItemProps) => {
  const { id, name, address, parkingAvailable, cookingAvailable, description } = accomodationItem;

  return (
    <li>
      <Link href={`/accomodation/${id}`}>
        <AccomodationItemBox>
          <AccomodationItemStyled>
            <AccomodationItemImageBox className="accomodation-description__image">
              <Image src="/images/hero_background_image.jpg" alt={name} fill objectFit="cover" />
            </AccomodationItemImageBox>
            <Description>
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
              <DescriptionDetail className="accomodation-description__detail">
                <DescriptionDetailText>{description}</DescriptionDetailText>
              </DescriptionDetail>
            </Description>
          </AccomodationItemStyled>
        </AccomodationItemBox>
      </Link>
    </li>
  );
};

export default AccomodationItem;
