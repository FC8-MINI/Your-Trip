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
  DescriptionPriceBox,
  DescriptionPriceUnit,
  DescriptionTitle,
  SoldOutImageCover,
  SoldOutPrice,
} from "./AccomodationItem.styles";
import Link from "next/link";
import { MdOutlineNoMeals } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { TbParking, TbParkingOff } from "react-icons/tb";
import { AccomodationItemProps } from "./AccomodationItem.types";
import Image from "next/image";
import { RiMapPin2Fill } from "react-icons/ri";

const imageStyle = { objectFit: "cover" };

const AccomodationItem = ({ accomodationItem }: AccomodationItemProps) => {
  const {
    id,
    name,
    address,
    parkingAvailable,
    cookingAvailable,
    description,
    minPrice,
    reservationAvailable,
    accomodationImageUrls,
  } = accomodationItem;

  return (
    <li>
      <AccomodationItemBox>
        <Link href={`/accomodation/${id}`}>
          <AccomodationItemStyled>
            <AccomodationItemImageBox className="accomodation-description__image">
              <Image src={accomodationImageUrls[0]} alt={name} fill style={imageStyle} />
              {reservationAvailable || <SoldOutImageCover>예약 마감</SoldOutImageCover>}
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
              <DescriptionPriceBox>
                {reservationAvailable || <SoldOutPrice>예약 마감</SoldOutPrice>}
                <DescriptionPrice $reservationAvailable={reservationAvailable}>
                  {minPrice.toLocaleString()}
                </DescriptionPrice>
                <DescriptionPriceUnit $reservationAvailable={reservationAvailable}>원</DescriptionPriceUnit>
              </DescriptionPriceBox>
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
