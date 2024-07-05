import { device } from "@/styles/media";
import styled from "styled-components";

export const OptionBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  padding: 3rem;
  margin-bottom: 1.6rem;
  border-radius: 1.2rem;
  background-color: var(--color-gray-hover);

  @media ${device.notebook} {
    flex-direction: column;
  }
`;

export const InputBox = styled.div`
  min-width: 26rem;
  max-width: 100%;
  flex-basis: 0;

  @media ${device.notebook} {
    width: 100%;
  }
`;
