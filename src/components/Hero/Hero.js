import Button from "../../styles/GlobalComponents/Button";
import {
  HeroButton,
  HeroSection,
  HeroSpan,
  HeroText,
  HeroTitle,
} from "./HeroStyles";

const Hero = (props) => {
  return (
    <>
      <HeroSection>
        <HeroTitle main center>
          <HeroSpan> I am </HeroSpan>
          Ivan Damjanović
        </HeroTitle>
        <HeroText>
          My passion is coding and designing websites, and mobile applications.
        </HeroText>

        <HeroButton>
          <Button href="#projects">Learn More</Button>
        </HeroButton>
      </HeroSection>
    </>
  );
};

export default Hero;
