import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start; /* 체크박스와 문구를 왼쪽 정렬 */
  margin-top: 2rem;
`;

export const TermItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 체크박스와 문구 사이의 간격을 0.5rem으로 설정 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙으로 정렬
  width: 100%;
  margin-top: 20px; // 버튼과 위 요소 사이에 간격 추가
`;

export const PayButtonStyled = styled(Button)<{ $size?: string }>`
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

export const ViewRes = styled(Link)`
  padding: 0.8rem 3rem;
  border-radius: 0.8rem;
  color: var(--color-white);
  background-color: var(--color-primary);
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const BoldLabel = styled.label`
  font-weight: bold;
`;

export const RegularLabel = styled.label`
  font-weight: normal;
`;
