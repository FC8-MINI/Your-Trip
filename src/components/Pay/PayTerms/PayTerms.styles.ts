import styled from "styled-components";
import Button from "@/components/Button";
import { ContainerStyled } from "@/components/Container";

export const TermsContainer = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  margin-top: 5rem;
`;

export const TermsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  margin-top: 5rem;
`;

export const TermItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const PayButtonStyled = styled(Button)<{ $size?: string }>`
  color: var(--color-white);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ $size }) => ($size === "large" ? "1.6rem" : "1rem")};
  padding: ${({ $size }) => ($size === "large" ? "1.2rem 3rem" : "0.8rem 1.5rem")};
  width: ${({ $size }) => ($size === "large" ? "40rem" : "fit-content")};

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export const BoldLabel = styled.p`
  font-weight: bold;
  padding-top: 0.1rem;
`;

export const RegularLabel = styled.p`
  font-weight: normal;
  padding-top: 0.1rem;
`;

export const SwalPopup = styled.div`
  &.custom-swal-height {
    height: 400px;
  }
`;
