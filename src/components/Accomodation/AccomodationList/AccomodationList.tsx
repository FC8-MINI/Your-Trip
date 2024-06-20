import Container from "@/components/Container";
import AccomodationItem from "../AccomodationItem";
import { AccomodationListStyled, AccomodationListTitle } from "./AccomodationList.styles";

const AccomodationList = () => {
  return (
    <Container>
      <AccomodationListTitle>인기 추천 숙소!</AccomodationListTitle>
      <AccomodationListStyled>
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
        <AccomodationItem />
      </AccomodationListStyled>
    </Container>
  );
};

export default AccomodationList;
