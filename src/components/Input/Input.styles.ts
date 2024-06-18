import styled from "styled-components";
import { InputStyledProps } from "./Input.types";

export const InputStyled = styled.input<InputStyledProps>`
  color: var(--color-black);

  display: block;

  width: 40rem;
  height: 5rem;

  padding: 0 1.5rem;

  border-radius: 0.6rem;
  border: 1px solid ${({ error }) => (error ? "var(--color-error)" : "var(--color-gray)")};
  background-color: var(--color-white);

  &::placeholder {
    color: var(--color-gray-dark);
  }

  &:focus {
    border: 1px solid var(--color-primary);
  }

  &:read-only {
    border: 1px solid var(--color-gray);
  }
`;

export const LabelText = styled.p`
  font-weight: 600;

  display: block;

  margin-bottom: 0.2rem;
`;

export const ErrorText = styled.p`
  color: var(--color-error);
  font-size: 1.4rem;

  margin-top: 0.6rem;
  margin-left: 1rem;
`;
