import styled from "styled-components";
import { FormProvider as OriginalFormProvider } from "react-hook-form";

export const ListBox = styled(OriginalFormProvider)`
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  position: relative;
  padding: 2.6rem 2.6rem 2.6rem 0;
`;

export const Wrapper = styled.div`
  max-width: 100%;
`;

export const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  justify-content: flex-start;
  height: 6rem;
  border-bottom: 0.1rem solid var(--color-gray);
  padding-left: 1rem; /* 추가된 부분 */
`;

export const InfoContainer = styled.div`
  padding: 1.5rem 0 0 0;
  justify-content: center;
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  & > input {
    margin: 0;
  }
  & > div {
    margin-left: 0.8rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.8rem 3rem;
  margin-left: auto; /* 수정된 부분 */
  margin-right: 2.6rem;
  border: none;
  border-radius: 0.8rem;
  color: var(--color-white);
  background-color: var(--color-gray-dark);
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-darker);
  }
`;
