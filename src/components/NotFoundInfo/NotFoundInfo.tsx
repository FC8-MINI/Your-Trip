"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import { ButtonBox, CodeText, DescriptionText, NotFoundContainer, NotFoundText } from "./NotFoundInfo.styles";

const NotFound = () => {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <CodeText>404</CodeText>
      <NotFoundText>Not Found</NotFoundText>
      <DescriptionText>
        죄송합니다. 페이지를 찾을 수 없습니다.
        <br />
        입력하신 페이지 주소가 정확한지 또는 존재하는지 확인바랍니다.
      </DescriptionText>
      <ButtonBox>
        <Button onClick={() => router.replace("/")}>메인으로</Button>
        <Button $mode="primary" onClick={() => router.back()}>
          뒤로가기
        </Button>
      </ButtonBox>
    </NotFoundContainer>
  );
};

export default NotFound;
