import Container from "@/components/Container";
import AccomodationItem from "../AccomodationItem";
import { AccomodationListStyled, AccomodationListTitle } from "./AccomodationList.styles";
import { AccomodationListProps } from "./AccomodationList.types";

const AccomodationList = ({ category, totalElements, accomodationItems }: AccomodationListProps) => {
  return (
    <Container>
      <div>
        <AccomodationListTitle>
          {category ? `검색결과: ${category} (${totalElements}개)` : "인기 추천 숙소!"}
        </AccomodationListTitle>
        <AccomodationListStyled>
          {accomodationItems.map((accomodationItem) => {
            return <AccomodationItem key={accomodationItem.id} accomodationItem={accomodationItem} />;
          })}
        </AccomodationListStyled>
      </div>
    </Container>
  );
};

export default AccomodationList;
