import styled from "styled-components";
import Link from "next/link";

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  padding: 0 3rem;
`;

export const SummaryText = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

export const SummaryPricesContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

export const SummaryPrice = styled.div`
  font-size: 2rem;
  font-weight: 300;
  &:nth-child(2) {
    font-size: 3rem;
    font-weight: 700;
  }
`;

export const ButtonContainer = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CartButton = styled(Link)`
  color: var(--color-white);
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 3rem;
  border-radius: 0.8rem;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--color-primary-hover);
  }
`;
