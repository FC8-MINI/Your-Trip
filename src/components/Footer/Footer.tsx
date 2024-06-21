import Image from "next/image";
import { BACK_END, FRONT_END } from "./Footer.constants";
import {
  CopyrightText,
  EndBox,
  EndText,
  FooterContainer,
  FooterStyled,
  LogoBox,
  LogoImageBox,
  MemberText,
  MetaBox,
  TeamBox,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <TeamBox>
          <LogoBox>
            <LogoImageBox>
              <Image src="/images/logo.svg" alt="로고 이미지" width={420} height={77} />
            </LogoImageBox>
            <div>국내부터 해외까지 여기말고 저기어때</div>
          </LogoBox>
          <EndBox>
            <EndText>Front End</EndText>
            {FRONT_END.map(({ name }) => {
              return <MemberText key={name}>{name}</MemberText>;
            })}
          </EndBox>
          <EndBox>
            <EndText>Back End</EndText>
            {BACK_END.map(({ name }) => {
              return <MemberText key={name}>{name}</MemberText>;
            })}
          </EndBox>
        </TeamBox>
        <MetaBox>
          (주)저기어때컴퍼니
          <br />
          주소 : 평양시 평천구 북성1동 104 3-2호 | 대표이사 : 누군가 | 사업자등록번호 : 123-45-67893
          <br />
          전자우편주소 : help@jeogi.com | 통신판매번호 : 2024-평양평천-01987 | 관광사업자 등록번호 : 제9999-99호 |
          전화번호 : 1234-5678 | 호스팅서비스제공자의 상호 표시 : (주)저기어때컴퍼니
          <br />
          (주)저기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한
          의무와 책임은 각 판매자에게 있습니다.
          <br />
          <CopyrightText>&copy; {new Date().getFullYear()} 연매출2조. All Rights Reserved.</CopyrightText>
        </MetaBox>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
