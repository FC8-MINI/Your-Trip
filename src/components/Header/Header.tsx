"use client";

import Link from "next/link";
import Button from "../Button";
import { HeaderContainer, HeaderRight, HeaderStyled, UserNicknameText } from "./Header.styles";
import Image from "next/image";
import DropdownMenu from "../DropdownMenu";
import { getUserInfo } from "@/apis/auth/getUserInfo";
import { UserInfo } from "./Header.types";
import { useEffect, useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const [error, data] = await getUserInfo();

      if (!error) {
        setUserInfo(data.body);
      }
    };

    fetchUserInfo().catch(() => setUserInfo(null));
  }, []);

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width="105" height="19" />
        </Link>
        <HeaderRight>
          {userInfo ? (
            <>
              <UserNicknameText>
                <RiAccountCircleLine />
                {userInfo.nickname}
                <span>님</span>
              </UserNicknameText>
              <DropdownMenu />
            </>
          ) : (
            <Link href="/login">
              <Button>로그인</Button>
            </Link>
          )}
        </HeaderRight>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
