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
import Swal from "sweetalert2";

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

  const onClickLogout = async () => {
    const response = await fetch("https://api.miniteam2.store/api/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      redirect: "manual",
    });

    if (response.type === "opaqueredirect") {
      window.location.reload();
    } else {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "error",
        title: "로그아웃에 실패했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
      });
    }
  };

  const onClickWithDraw = async () => {
    const response = await fetch("https://api.miniteam2.store/api/auth/withdraw", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      cache: "no-store",
      redirect: "manual",
    });

    if (response.type === "opaqueredirect") {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "success",
        title: "회원탈퇴에 성공했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        willClose: () => {
          window.location.href = "/";
        },
      });
    } else {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "error",
        title: "회원탈퇴에 실패했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
      });
    }
  };

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
          <DropdownMenuListItem onClick={onClickLogout}>로그아웃</DropdownMenuListItem>
          <DropdownMenuListItem onClick={onClickWithDraw}>회원탈퇴</DropdownMenuListItem>
        </DropdownMenuList>
      )}
    </DropdownMenuBox>
  );
};

export default DropdownMenu;
