import styled from "styled-components";

export const HeroSection = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;

    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const HeroSpan = styled.span`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.86);
  font-weight: bold;
  display: block;
  margin: -15px;
  animation-name: example;
  animation-duration: 4s;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;

    margin: -8px;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    font-size: 1.5rem;
    padding-right: 1rem;
  }
`;

export const HeroTitle = styled.h2`
  text-align: center;
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: 100%;
  color: linear-gradient(121.57deg, #ffffff 18.77%, 60.15%;);
  background: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "48px 0 16px" : "0")};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 40px;
    font-size: ${(props) => (props.main ? "48px" : "32px")};
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    font-size: 4rem;
  }
`;
export const HeroText = styled.p`
  font-family: ${(props) => props.theme.fonts.title};
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.7);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const HeroButton = styled.div`
  font-family: ${(props) => props.theme.fonts.title};
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 670px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? "150px" : "262px")};
  height: ${({ alt }) => (alt ? "52px" : "64px")};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? "20px" : "24px")};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: #fff;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
      : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "150px" : "184px")};
    height: ${({ alt }) => (alt ? "52px" : "48px")};
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "64px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }
`;

export const ButtonFront = styled.a`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: ${({ disabled }) => (disabled ? ".5" : "1")};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? "20px" : "24px")};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
