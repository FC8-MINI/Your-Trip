import Container from "@/components/Container";
import { LikeListTitle, LikeListLayout } from "./LikeList.styles";
import { LikeItemProps } from "../LikeItem/LikeItem.types";
import LikeItem from "../LikeItem";

const likeItems: LikeItemProps[] = [
  {
    id: 1,
    name: "숙소 이름1",
    description: "숙소 설명입니다.",
    postalCode: 12345678,
    address: "어쩌고 저쩌고 여기저기",
  },
  {
    id: 2,
    name: "숙소 이름2",
    description: "숙소2 설명입니다.",
    postalCode: 12345678,
    address: "어쩌고 저쩌고 여기저기",
  },
  {
    id: 3,
    name: "숙소 이름3",
    description: "숙소 설명입니다.",
    postalCode: 12345678,
    address: "어쩌고 저쩌고 여기저기",
  },
  {
    id: 3,
    name: "숙소 이름3",
    description: "숙소 설명입니다.",
    postalCode: 12345678,
    address: "어쩌고 저쩌고 여기저기",
  },
  {
    id: 3,
    name: "숙소 이름3",
    description: "숙소 설명입니다.",
    postalCode: 12345678,
    address: "어쩌고 저쩌고 여기저기",
  },
];

const LikeList = () => {
  return (
    <Container>
      <LikeListTitle>내 찜 목록</LikeListTitle>
      <LikeListLayout>
        {likeItems.map((likeItem) => {
          return (
            <LikeItem
              key={likeItem.id}
              id={likeItem.id}
              name={likeItem.name}
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
