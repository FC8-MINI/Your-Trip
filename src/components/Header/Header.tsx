import Link from "next/link";
import Button from "../Button";
import { HeaderContainer, HeaderRight, HeaderStyled } from "./Header.styles";
import Image from "next/image";
import DropdownMenu from "../DropdownMenu";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width="105" height="19" />
        </Link>
        <HeaderRight>
          <Link href="/login">
            <Button>로그인</Button>
          </Link>
          <DropdownMenu />
        </HeaderRight>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
