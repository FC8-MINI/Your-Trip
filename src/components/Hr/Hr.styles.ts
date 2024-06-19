import styled from "styled-components";
import { type HrStyledProps } from "./Hr.types";

export const HrStyled = styled.hr<HrStyledProps>`
  color: var(--color-gray);

  width: ${({ size }) => (size === "full" ? "100%" : "24rem")};

  margin: 0.8rem 0;
`;
