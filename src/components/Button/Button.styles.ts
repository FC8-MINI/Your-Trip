import styled from "styled-components";
import { ButtonStyledProps } from "./Button.types";

const ButtonStyled = styled.button<ButtonStyledProps>`
  color: ${({ $mode }) => ($mode === "primary" ? "var(--color-white)" : "var(--color-black)")};
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $size }) => ($size === "large" ? "40rem" : "fit-content")};

  padding: 0.8rem 3rem;

  border: 0.1rem solid ${({ $mode }) => ($mode === "primary" ? "transparent" : "var(--color-gray)")};
  border-radius: 0.8rem;

  background-color: ${({ $mode }) => ($mode === "primary" ? "var(--color-primary)" : "var(--color-white)")};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $mode }) =>
      $mode === "primary" ? "var(--color-primary-hover)" : "var(--color-gray-hover)"};
  }
`;

export default ButtonStyled;
