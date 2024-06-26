import styled from "styled-components";
import { InputStyledProps, LabelStyledProps } from "./Input.types";
import { device } from "@/styles/media";

export const InputStyled = styled.input<InputStyledProps>`
  color: var(--color-black);

  display: block;

  width: 100%;
  height: 5rem;

  padding: 0 1.5rem;

  border-radius: 0.6rem;
  border: 1px solid ${({ $error }) => ($error ? "var(--color-error)" : "var(--color-gray)")};
  background-color: var(--color-white);

  &::placeholder {
    color: var(--color-gray-dark);
  }

  &:focus {
    border: 1px solid ${({ $error }) => ($error ? "var(--color-error)" : "var(--color-primary)")};
  }

  &:read-only {
    border: 1px solid var(--color-gray);
  }
`;

export const LabelStyled = styled.label<LabelStyledProps>`
  width: ${({ $size }) => ($size === "common" ? "40rem" : "100%")};

  @media ${device.mobile} {
    width: ${({ $size }) => $size === "common" && "100%;"};
  }
`;

export const LabelText = styled.p`
  font-weight: 600;

  margin-bottom: 0.2rem;
`;

export const ErrorText = styled.p`
  color: var(--color-error);
  font-size: 1.4rem;

  margin-top: 0.6rem;
  margin-left: 1rem;
`;
