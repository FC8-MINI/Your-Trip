import Image from "next/image";
import SearchForm from "../SearchForm";
import { HeroBackgroundImage, HeroContainer, HeroStyled, HeroTitle } from "./HeroSection.styles";

const imageStyle = { objectFit: "cover" };

const Hero = () => {
  return (
    <HeroStyled>
      <HeroBackgroundImage>
        <Image src="/images/hero_background_image.jpg" alt="hero section 배경 이미지" fill style={imageStyle} />
      </HeroBackgroundImage>
      <HeroContainer>
        <HeroTitle>
          <p>국내부터 해외까지</p>
          <p>여기말고 저기어때</p>
        </HeroTitle>
        <SearchForm />
      </HeroContainer>
    </HeroStyled>
  );
};

export default Hero;
