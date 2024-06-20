import styled from "styled-components";
import { RiDoubleQuotesR } from "react-icons/ri";

export const NameText = styled.strong`
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
  padding-left: 4rem;
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
