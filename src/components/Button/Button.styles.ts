import styled from "styled-components";
import { ButtonStyledProps } from "./Button.types";
import { device } from "@/styles/media";

const ButtonStyled = styled.button<ButtonStyledProps>`
  color: ${({ $mode }) => ($mode === "primary" ? "var(--color-white)" : "var(--color-black)")};
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $size }) => ($size === "large" ? "40rem" : "fit-content")};

  padding: ${({ $size }) => ($size === "large" ? "1.2rem 3rem" : "0.8rem 3rem")};

  border: 0.1rem solid ${({ $mode }) => ($mode === "common" ? "var(--color-gray)" : "transparent")};
  border-radius: 0.8rem;

  background-color: ${({ $mode }) =>
    $mode === "primary" ? "var(--color-primary)" : $mode === "common" ? "var(--color-white)" : "#FFDE02"};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ $mode }) =>
      $mode === "primary" ? "var(--color-primary-hover)" : $mode === "common" ? "var(--color-gray-hover)" : "#fbda00"};
  }

  &:disabled {
    background-color: var(--color-gray-dark);
    pointer-events: none;
  }

  @media ${device.mobile} {
    width: ${({ $size }) => $size === "large" && "100%"};
    max-width: ${({ $size }) => $size === "large" && "40rem"};
  }

  &.swal2-popup {
    font-size: 1.6rem;

    .btn {
      color: var(--color-black);
      border: 0.1rem solid var(--color-gray-dark);
      background-color: var(--color-white);
      transition: background-color 0.2s;

      &.btn-primary {
        color: var(--color-white);
        background-color: var(--color-primary);
        border: none;

        &:hover {
          background-color: var(--color-primary-hover);
        }
      }

      &:hover {
        background-color: var(--color-gray-hover);
      }
    }
  }
`;

export default ButtonStyled;
