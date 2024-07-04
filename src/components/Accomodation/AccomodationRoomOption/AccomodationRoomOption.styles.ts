import { device } from "@/styles/media";
import styled from "styled-components";

export const OptionBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  margin: 4rem 0 1.6rem;
  border-radius: 1.2rem;
  background-color: var(--color-gray-hover);

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const InputBox = styled.div`
  min-width: 26rem;
  max-width: 100%;
  flex-basis: 0;

  @media ${device.notebook} {
    min-width: 18rem;
  }

  @media ${device.tablet} {
    width: 100%;
    margin: 0.8rem 0;
  }
`;
