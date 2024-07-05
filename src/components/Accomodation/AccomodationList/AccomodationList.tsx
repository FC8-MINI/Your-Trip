import Container from "@/components/Container";
import AccomodationItem from "../AccomodationItem";
import { AccomodationListStyled, AccomodationListTitle } from "./AccomodationList.styles";
import { AccomodationListProps } from "./AccomodationList.types";

const AccomodationList = ({ isMain, totalElements, accomodationItems }: AccomodationListProps) => {
  return (
    <Container>
      <div>
        <AccomodationListTitle>{isMain ? "인기 추천 숙소!" : `검색 결과 (${totalElements}개)`}</AccomodationListTitle>
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
