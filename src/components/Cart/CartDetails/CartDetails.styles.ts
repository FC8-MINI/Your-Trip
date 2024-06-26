import styled from "styled-components";
import Button from "@/components/Button";

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
`;

export const SummaryText = styled.div`
  font-size: 16px;
`;

export const SummaryPricesContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const SummaryPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const StyledButton = styled(Button)<{ $size?: string }>`
  color: var(--color-white);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center; // 버튼 내용 중앙 정렬

  font-size: ${({ $size }) => ($size === "large" ? "1.6rem" : "1rem")};
  padding: ${({ $size }) => ($size === "large" ? "1.2rem 3rem" : "0.8rem 1.5rem")};
  width: ${({ $size }) => ($size === "large" ? "40rem" : "fit-content")};

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙으로 정렬
  width: 100%;
  margin-top: 20px; // 버튼과 위 요소 사이에 간격 추가
`;
