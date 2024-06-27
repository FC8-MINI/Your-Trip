import styled from "styled-components";
import { type HrStyledProps } from "./Hr.types";

export const HrStyled = styled.hr<HrStyledProps>`
  background-color: var(--color-gray);

  border: 0;

  width: ${({ $size }) => ($size === "full" ? "100%" : "24rem")};
  height: 0.1rem;

  ${({ $gap }) => $gap && "margin: 0.8rem 0;"}
`;
