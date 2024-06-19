import styled from "styled-components";
import { ContainerStyled } from "../Container";

export const HeroStyled = styled.section`
  position: relative;
`;

export const HeroBackgroundImage = styled.div`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100%;

  filter: blur(0.05rem);
`;

export const HeroTitle = styled.h1`
  color: var(--color-white);
  font-size: 4rem;
  line-height: 5rem;

  margin-bottom: 3.2rem;
`;

export const HeroContainer = styled(ContainerStyled)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 53rem;

  padding-bottom: 5.6rem;
`;
