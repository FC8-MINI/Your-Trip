import styled from "styled-components";

export const DropdownMenuBox = styled.div`
  position: relative;
`;

export const Hamburger = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  padding: 1rem;

  background-color: var(--color-white);

  border: 1px solid var(--color-gray);
  border-radius: 0.8rem;

  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-hover);
  }
`;

export const HamburgerLine = styled.div`
  width: 2rem;
  height: 0.1rem;
  background-color: var(--color-black);
`;

export const DropdownMenuList = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;

  width: 200px;

  padding: 0.8rem;

  background-color: var(--color-white);

  border: 1px solid var(--color-gray-hover);
  border-radius: 0.8rem;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const DropdownMenuListItem = styled.div`
  display: flex;
  align-items: center;

  height: 4.4rem;

  padding: 0.8rem;

  border-radius: 0.8rem;

  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-hover);
  }
`;
