import { device } from "@/styles/media";
import styled from "styled-components";
import { ContainerStyledProps } from "./Container.types";

export const ContainerStyled = styled.div<ContainerStyledProps>`
  max-width: 120rem;

  margin: 0 auto;

  ${({ $flex }) =>
    $flex && "display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1.6rem;"}

  @media ${device.desktop} {
    padding: 0 4rem;
  }

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.mobile} {
    padding: 0 2rem;
  }
`;
