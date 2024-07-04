import styled from "styled-components";

export const LikeItemLayout = styled.li`
  overflow: hidden;
  border-radius: 1.4rem;
  box-shadow: 0 2px 16px rgb(235, 235, 235);
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 50%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2.2rem;

  > div {
    position: relative;

    svg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const InfoName = styled.h3`
  font-size: 1.8rem;
`;

export const InfoDescText = styled.p`
  margin-bottom: 1rem;
`;

export const InfoPostcodeText = styled.span`
  display: inline-block;
  padding-left: 2rem;
  color: var(--color-gray-darker);
  font-size: 1.5rem;
`;

export const InfoAddressText = styled.span`
  display: inline-block;
  padding-left: 2rem;
  color: var(--color-gray-darker);
  font-size: 1.5rem;
`;
