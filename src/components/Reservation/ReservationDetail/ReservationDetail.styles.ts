import { device } from "@/styles/media";
import styled from "styled-components";

export const DetailBox = styled.div`
  overflow: hidden;
  max-width: 70rem;
  margin: 0 auto;
  border-radius: 1.6rem;
`;

export const TitleText = styled.h2`
  padding: 3rem 0 2rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 50%;
  margin: 0 auto;
`;

export const InfoBox = styled.div`
  padding: 3rem;
  background-color: var(--color-gray-hover);
`;

export const NameText = styled.strong`
  display: block;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const InfoDl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--color-white);
  border-radius: 1.6rem;
  padding: 3rem 2.6rem;

  & > div {
    display: flex;
    align-items: baseline;

    @media ${device.tablet} {
      display: block;
    }
  }
`;

export const InfoDt = styled.dt`
  width: 12rem;
  font-weight: 600;
  color: var(--color-gray-dark);
  margin-bottom: 0.6rem;
`;

export const InfoDd = styled.dd`
  font-size: 1.7rem;
  font-weight: 500;
  word-break: keep-all;
`;
