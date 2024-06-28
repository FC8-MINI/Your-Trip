import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { AccomodationEmptyTitle, ButtonBox, DescriptionBox, DescriptionText } from "./AccomodationEmpty.styles";
import Container from "@/components/Container";

const AccomodationEmpty = () => {
  const router = useRouter();

  return (
    <Container>
      <AccomodationEmptyTitle>검색 결과 0개</AccomodationEmptyTitle>
      <DescriptionBox>
        <DescriptionText>
          검색 결과가 없어요.
          <br />
          검색어를 정확하게 입력했는지 확인해보세요.
        </DescriptionText>
        <ButtonBox>
          <Button onClick={() => router.replace("/")}>메인으로</Button>
          <Button $mode="primary" onClick={() => router.back()}>
            뒤로가기
          </Button>
        </ButtonBox>
      </DescriptionBox>
    </Container>
  );
};

export default AccomodationEmpty;
