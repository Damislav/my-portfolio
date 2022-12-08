import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
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
          <br /> Ivan Damjanović
        </HeroTitle>
        <HeroText>
          My passion is coding and designing websites, and mobile applications.
        </HeroText>

        <HeroButton>
          <Button onClick={props.handleClick}>Learn More</Button>
        </HeroButton>
      </HeroSection>
    </>
  );
};

export default Hero;
