"use client";

import Link from "next/link";
import { DropdownMenuList, DropdownMenuListItem, Hamburger, HamburgerLine } from "./DropdownMenu.styles";
import { useReducer } from "react";

const DropdownMenu = () => {
  const [open, toggleMenu] = useReducer((v) => !v, false);

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
        {open && (
          <DropdownMenuList>
            <DropdownMenuListItem>
              <Link href="/reservation">예약 내역</Link>
            </DropdownMenuListItem>
            <DropdownMenuListItem>
              <Link href="cart">장바구니</Link>
            </DropdownMenuListItem>
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
