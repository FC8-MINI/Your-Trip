import styled from "styled-components";

export const FooterStyled = styled.footer`
  color: var(--color-gray-dark);

  margin-top: 10rem;

  background-color: var(--color-gray-hover);
`;

export const TeamBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3rem;

  padding: 4rem 2rem;
`;

export const LogoBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const LogoImageBox = styled.div`
  width: calc(420px * 0.6);
  height: calc(77px * 0.6);
`;

export const EndBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-right: 8rem;
`;

export const EndText = styled.p`
  color: #707070;
  font-size: 1.5rem;
  font-weight: 500;

  margin-bottom: 0.2rem;
`;

export const MemberText = styled.p`
  font-size: 1.4rem;
`;

export const MetaBox = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;

  padding: 4rem 2rem;

  border-top: 1px solid var(--color-gray);
`;

export const CopyrightText = styled.p`
  margin-top: 2rem;
`;
