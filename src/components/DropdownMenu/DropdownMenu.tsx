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
import { useRouter } from "next/navigation";
import { delelteAuthWithDraw } from "@/apis/auth/deleteAuthWithDraw";
import { getLogout } from "@/apis/auth/getLogout";

const DropdownMenu = () => {
  const router = useRouter();
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
    const [error, data] = await getLogout();

    if (error) {
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
    } else {
      await Swal.fire({
        customClass: {
          confirmButton: "btn btn-primary",
        },
        icon: "success",
        title: "로그아웃에 성공했습니다.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500,
        willClose: () => {
          toggleMenu();
          router.push("/");
        },
      });
    }
  };

  const onClickWithDraw = async () => {
    const [error, data] = await delelteAuthWithDraw();

    if (error) {
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
    } else {
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
          toggleMenu();
          router.push("/");
        },
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
