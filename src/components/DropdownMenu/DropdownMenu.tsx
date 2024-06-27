"use client";

import Link from "next/link";
import {
  DropdownMenuBox,
  DropdownMenuList,
  DropdownMenuListItem,
  Hamburger,
  HamburgerLine,
} from "./DropdownMenu.styles";
import { useEffect, useReducer, useRef } from "react";
import { DROPDOWN_MENU_LINKS } from "./DropdownMenu.constants";

const DropdownMenu = () => {
  const [isOpened, toggleMenu] = useReducer((v) => !v, false);

  const dropDownMenuListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!isOpened) return;

      if (dropDownMenuListRef.current && !dropDownMenuListRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("click", listener);
    };
  }, [dropDownMenuListRef, isOpened]);

  return (
    <DropdownMenuBox>
      <Hamburger
        $isOpened={true}
        onClick={() => {
          toggleMenu();
        }}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
      {isOpened && (
        <DropdownMenuList ref={dropDownMenuListRef}>
          {DROPDOWN_MENU_LINKS.map(({ name, href }) => {
            return (
              <Link key={name} href={href}>
                <DropdownMenuListItem
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  {name}
                </DropdownMenuListItem>
              </Link>
            );
          })}
          <DropdownMenuListItem
            onClick={() => {
              toggleMenu();
            }}
          >
            <div>로그아웃</div>
          </DropdownMenuListItem>
        </DropdownMenuList>
      )}
    </DropdownMenuBox>
  );
};

export default DropdownMenu;
