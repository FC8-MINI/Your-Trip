import styled from "styled-components";
import { SearchBoxProps, SearchFormStyledProps } from "./SearchForm.types";
import ButtonStyled from "../Button/Button.styles";
import { device } from "@/styles/media";

export const SearchBox = styled.div<SearchBoxProps>`
  padding: ${({ $error }) => ($error ? "2.4rem 3rem 1rem" : "2.4rem 3rem 3.35rem")};

  border-radius: 1.6rem;

  background-color: var(--color-white);

  @media ${device.notebook} {
    gap: 1rem;

    padding: 2.4rem 2.5rem 3.35rem;
  }
`;

export const SearchFormStyled = styled.form<SearchFormStyledProps>`
  display: flex;
  gap: 1.6rem;

  border-radius: 1.6rem;

  background-color: var(--color-white);

  @media ${device.notebook} {
    flex-direction: column;
  }
`;

export const SearchInputBox = styled.div`
  min-width: 23.5rem;
  width: 100%;
  max-width: 100%;
`;

export const SearchButton = styled(ButtonStyled)`
  height: 5rem;

  margin-top: 2rem;
  margin-bottom: ${({ $error }) => $error && "2.35rem"};

  padding: 0.8rem;

  @media ${device.notebook} {
    width: 100%;
    margin-bottom: 0;
  }
`;
