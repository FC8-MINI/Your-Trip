import Image from "next/image";
import styled from "styled-components";

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 51.2rem;
  margin-bottom: 2.6rem;
  border-radius: 1.2rem;
`;

export const ImageStyled = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoTitleText = styled.strong`
  display: block;
  padding: 1.6rem 0;
  font-size: 1.8rem;
  font-weight: 700;
`;
