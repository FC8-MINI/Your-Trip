import { LikeIconStyled, LikeIconBox } from "./LikeIcon.styles";
import { RiHeart3Line } from "react-icons/ri";

const LikeIcon = () => {
  return (
    <LikeIconStyled>
      <LikeIconBox>
        <RiHeart3Line />
      </LikeIconBox>
    </LikeIconStyled>
  );
};

export default LikeIcon;
