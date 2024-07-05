import Image from "next/image";
import {
  LikeItemLayout,
  ImageBox,
  InfoBox,
  InfoName,
  InfoPostcodeText,
  InfoDescText,
  InfoAddressText,
} from "./LikeItem.styles";
import { LikeItemProps } from "./LikeItem.types";
import { RiMapPin2Fill, RiSignpostFill } from "react-icons/ri";

const LikeItem = ({ name, accomodationImageUrls, description, postalCode, address }: LikeItemProps) => {
  const truncatedDescription = description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <LikeItemLayout>
      <ImageBox>
        <Image src={accomodationImageUrls[0]} fill objectFit="cover" alt={name} />
      </ImageBox>

      <InfoBox>
        <InfoName>{name}</InfoName>
        <InfoDescText>{truncatedDescription}</InfoDescText>
        <div>
          <RiSignpostFill />
          <InfoPostcodeText>{postalCode}</InfoPostcodeText>
        </div>
        <div>
          <RiMapPin2Fill />
          <InfoAddressText>{address}</InfoAddressText>
        </div>
      </InfoBox>
    </LikeItemLayout>
  );
};

export default LikeItem;
