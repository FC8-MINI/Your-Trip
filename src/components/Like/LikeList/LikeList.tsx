import Container from "@/components/Container";
import { LikeListTitle, LikeListLayout } from "./LikeList.styles";
import LikeItem from "../LikeItem";
import { LikeListProps } from "./LikeList.types";

const LikeList = ({ likeItems }: LikeListProps) => {
  return (
    <Container>
      <LikeListTitle>내 찜 목록</LikeListTitle>
      <LikeListLayout>
        {likeItems.map((likeItem, index) => {
          return (
            <LikeItem
              key={index}
              name={likeItem.name}
              accomodationImageUrls={likeItem.accomodationImageUrls}
              description={likeItem.description}
              postalCode={likeItem.postalCode}
              address={likeItem.address}
            />
          );
        })}
      </LikeListLayout>
    </Container>
  );
};

export default LikeList;
