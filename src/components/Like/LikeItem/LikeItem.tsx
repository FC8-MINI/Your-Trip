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

const LikeItem = ({ id, name, description, postalCode, address }: LikeItemProps) => {
  return (
    <LikeItemLayout>
      <ImageBox>
        <Image src="/images/thumb.jpg" fill objectFit="cover" alt={name} />
      </ImageBox>

      <InfoBox>
        <InfoName>{name}</InfoName>
        <InfoDescText>{description}</InfoDescText>
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
