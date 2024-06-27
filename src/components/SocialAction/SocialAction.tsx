import {
  SocialActionLayout,
  LikeBox,
  LikeButton,
  LikeActiveButton,
  ShareBox,
  ShareButton,
} from "./SocialAction.styles";
import { RiHeart3Line, RiHeart3Fill, RiShareLine } from "react-icons/ri";
import { SocialActionProps } from "./SocialAction.types";

const SocialAction = ({ isLike, handleToggleLike }: SocialActionProps) => {
  return (
    <SocialActionLayout>
      <LikeBox>
        {isLike ? (
          <LikeActiveButton onClick={handleToggleLike}>
            <RiHeart3Fill />
          </LikeActiveButton>
        ) : (
          <LikeButton onClick={handleToggleLike}>
            <RiHeart3Line />
          </LikeButton>
        )}
      </LikeBox>
      <ShareBox>
        <ShareButton>
          <RiShareLine />
        </ShareButton>
      </ShareBox>
    </SocialActionLayout>
  );
};

export default SocialAction;
