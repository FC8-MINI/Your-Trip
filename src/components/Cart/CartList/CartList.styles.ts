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
  justify-content: space-between;
  height: 6rem;
  border-bottom: 0.1rem solid var(--color-gray);
  & > input {
    margin: 0 0 0 1rem;
  }
`;

export const InfoContainer = styled.div`
  padding: 1.5rem 0 0 0;
  justify-content: center;
`;

export const Checkbox = styled.input`
  display: inline-block;
  align-item: center;
  margin: 0 0 1rem 1rem;
`;

export const DeleteButton = styled.button`
  padding: 0.8rem 3rem;
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
