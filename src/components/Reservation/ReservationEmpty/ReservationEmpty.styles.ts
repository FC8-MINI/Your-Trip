import { device } from "@/styles/media";
import styled from "styled-components";

export const TitleText = styled.h2`
  padding: 3rem 0;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const ReservationEmptyInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  min-height: 26rem;
  height: 100%;
  border-radius: 1.6rem;
  box-shadow: 0 2px 16px rgb(235, 235, 235);

  @media ${device.tablet} {
    justify-content: center;
    text-align: center;
  }
`;

export const InfoTextBox = styled.div`
  padding: 4rem;

  strong {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    font-weight: 700;
  }

  span {
    display: block;
    margin-bottom: 2.4rem;
    font-size: 1.5rem;
    color: var(--color-gray-dark);
  }

  button {
    @media ${device.tablet} {
      margin: 0 auto;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;

  @media ${device.tablet} {
    display: none;
  }
`;
