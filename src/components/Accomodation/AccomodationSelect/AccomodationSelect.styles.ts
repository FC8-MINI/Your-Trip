import styled from "styled-components";

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin: 4rem 0 1.6rem;
  border-radius: 1.2rem;
  background-color: var(--color-gray-hover);
`;

export const InputBox = styled.div`
  width: 30rem;
`;

export const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 7rem;
    margin: 0 3rem;
    background-color: var(--color-gray);
  }
`;

export const WaveText = styled.span`
  display: inline-block;
  margin-top: 2rem;
  padding: 0 0.5rem;
`;
