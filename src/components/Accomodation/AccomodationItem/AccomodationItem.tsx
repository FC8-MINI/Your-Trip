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
import { RiMapPin2Fill } from "react-icons/ri";

const AccomodationItem = ({ accomodationItem }: AccomodationItemProps) => {
  const { id, name, address, parkingAvailable, cookingAvailable, description, minPrice } = accomodationItem;

  return (
    <li>
      <AccomodationItemBox>
        <Link href={`/accomodation/${id}`}>
          <AccomodationItemStyled>
            <AccomodationItemImageBox className="accomodation-description__image">
              <Image src="/images/hero_background_image.jpg" alt={name} fill objectFit="cover" />
            </AccomodationItemImageBox>
            <Description>
              <DescriptionTitle>{name}</DescriptionTitle>
              <DescriptionAddress>
                <RiMapPin2Fill />
                {address}
              </DescriptionAddress>
              <DescriptionAvailable>
                {parkingAvailable ? <TbParking color="#A8A8A8" /> : <TbParkingOff color="#f57373" />}
                {cookingAvailable ? <GiMeal color="#A8A8A8" /> : <MdOutlineNoMeals color="#f57373" />}
              </DescriptionAvailable>
              <DescriptionPrice>
                {minPrice.toLocaleString()}
                <span>원</span>
              </DescriptionPrice>
              <DescriptionDetail className="accomodation-description__detail">
                <DescriptionDetailText>{description}</DescriptionDetailText>
              </DescriptionDetail>
            </Description>
          </AccomodationItemStyled>
        </Link>
      </AccomodationItemBox>
    </li>
  );
};

export default AccomodationItem;
