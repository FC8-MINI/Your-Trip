import { device } from "@/styles/media";
import styled from "styled-components";

export const LikeListTitle = styled.h2`
  padding: 3rem 0 2rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const LikeListLayout = styled.ul`
  display: grid;
  grid-gap: 4rem 3rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-bottom: 6rem;

  @media ${device.notebook} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
