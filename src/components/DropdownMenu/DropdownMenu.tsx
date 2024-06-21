"use client";

import Link from "next/link";
import { DropdownMenuList, DropdownMenuListItem, Hamburger, HamburgerLine } from "./DropdownMenu.styles";
import { MouseEventHandler, useReducer } from "react";

const DropdownMenu = () => {
  const [isOpened, toggleMenu] = useReducer((v) => !v, false);

  const handleMenuClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <>
      <Hamburger
        onClick={() => {
          toggleMenu();
        }}
      >
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
        {isOpened && (
          <DropdownMenuList>
            <Link href="/reservation" onClick={handleMenuClick}>
              <DropdownMenuListItem>예약 내역</DropdownMenuListItem>
            </Link>
            <Link href="/cart">
              <DropdownMenuListItem onClick={handleMenuClick}>장바구니</DropdownMenuListItem>
            </Link>
            <DropdownMenuListItem>
              <div>로그아웃</div>
            </DropdownMenuListItem>
          </DropdownMenuList>
        )}
      </Hamburger>
    </>
  );
};

export default DropdownMenu;
