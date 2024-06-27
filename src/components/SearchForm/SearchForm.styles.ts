import styled from "styled-components";
import { SearchFormStyledProps } from "./SearchForm.types";
import ButtonStyled from "../Button/Button.styles";
import { device } from "@/styles/media";

export const SearchFormStyled = styled.form<SearchFormStyledProps>`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;

  padding: ${({ $error }) => ($error ? "2.4rem 3rem 1rem" : "2.4rem 3rem 3.35rem")};

  border-radius: 1.6rem;

  background-color: var(--color-white);

  @media ${device.mobile} {
    gap: 1rem;

    padding: ${({ $error }) => ($error ? "2.4rem 2.5rem 1rem" : "2.4rem 2.5rem 3.35rem")};
  }
`;

export const SearchButton = styled(ButtonStyled)`
  margin-bottom: ${({ $error }) => $error && "2.35rem"};

  @media ${device.mobile} {
    padding: 0.8rem;
  }
`;
