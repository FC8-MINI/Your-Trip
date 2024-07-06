import styled from "styled-components";
import { RiDoubleQuotesR } from "react-icons/ri";

export const AccomodationInfoStyled = styled.div`
  padding-top: 4rem;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 40%;
  margin-bottom: 2.6rem;
  border-radius: 1.2rem;
`;

export const AccomodationName = styled.h2`
  display: block;
  margin-bottom: 1.6rem;
  font-size: 3.2rem;
  font-weight: 700;
`;

export const AddressList = styled.ul`
  padding-bottom: 1.6rem;
  color: var(--color-gray-darker);
`;

export const AddressItem = styled.li`
  margin-bottom: 0.6rem;
`;

export const AddressText = styled.span`
  display: inline-block;
  padding-left: 0.6rem;
`;

export const PostcodeText = styled.span`
  display: inline-block;
  padding-left: 0.6rem;
`;

export const DescBox = styled.div`
  padding-bottom: 1.6rem;
  color: var(--color-gray-darker);
`;

export const DescText = styled.p`
  padding: 0 4rem;
  line-height: 1.4;
`;

export const RiDoubleQuotesRStyled = styled(RiDoubleQuotesR)`
  display: flex;
  margin-left: auto;
`;

export const UseInfoList = styled.ul`
  padding-bottom: 1.6rem;
`;

export const UseInfoItem = styled.li`
  margin-bottom: 1rem;
  color: var(--color-gray-darker);
`;

export const UseInfoText = styled.span`
  display: inline-block;
  padding-left: 0.6rem;
`;
