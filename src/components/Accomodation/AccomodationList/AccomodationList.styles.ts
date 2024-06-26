import { device } from "@/styles/media";
import styled from "styled-components";

export const AccomodationListTitle = styled.h2`
  font-size: 3.2rem;

  margin: 4rem 0 0rem 2rem;
`;

export const AccomodationListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  margin-bottom: 3rem;

  @media ${device.notebook} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
